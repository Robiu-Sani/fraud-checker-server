
import redis from "../../../db/redis/index.js";
import { generateUniqueId as uuid } from "../../../utility/unique-id.js";

// Constants
const MAX_MESSAGES_PER_CHUNK = 1; // Adjust as needed

/**
 * Generates meta key for a chat
 */
const getMetaKey = (chatId) => `chat:${chatId}:meta`;

/**
 * Generates chunk key for a chat
 */
const getChunkKey = (chatId, chunkIndex) => `chat:${chatId}:chunk:${chunkIndex}`;
/**
 * Stores a chat message in chunks.
 * @param chatId - The ID of the chat room
 * @param message - The chat message object
 */
/**
 * Stores a chat message in Redis with chunking
 * @param message - The chat message object { user_id, name, image_url, content }
 */
const storeChatMessage = async (payload) => {
    const chatId = payload?.chat_id || uuid();
    const metaKey = `chat:${chatId}:meta`;
    const messageId = uuid(); // Unique message ID


    // Get current metadata
    const meta = await redis.hgetall(metaKey);
    let totalMessages = Number(meta.total_messages || 0);
    let totalChunks = Number(meta.total_chunks || 1);

    if (totalMessages >= MAX_MESSAGES_PER_CHUNK) {
        totalChunks += 1;
    }

    // Store message in the appropriate chunk
    const targetChunkKey = `chat:${chatId}:chunk:${totalChunks}`;
    const newMessage = { id: messageId, chunkIndex: totalChunks, ...payload };
    await redis.rpush(targetChunkKey, JSON.stringify(newMessage));

    // Update metadata
    await redis.hset(metaKey, {
        total_messages: totalMessages + 1,
        total_chunks: totalChunks
    });

    return { success: true, message: "Chat stored", chatId, messageId };
};
/**
 * Retrieves chat messages for a specific chat ID.
 * @param chatId - The ID of the chat room
 * @param limit - Number of latest messages to fetch
 */
const getChatMessages = async (chatId, page = 1) => {
    const metaKey = `chat:${chatId}:meta`;
    const meta = await redis.hgetall(metaKey);

    if (!meta || !meta.total_chunks) {
        return { rows: [], currentPage: page, totalPages: 0, message: "No chat history found." };
    }

    const totalChunks = Number(meta.total_chunks);
    const pageNumber = Number(page);

    if (pageNumber < 1 || pageNumber > totalChunks) {
        return { rows: [], currentPage: pageNumber, totalPages: totalChunks, hasNext: false, hasPrevious: false, message: "Invalid page number." };
    }

    const chunkKey = `chat:${chatId}:chunk:${pageNumber}`;
    const chunkMessages = await redis.lrange(chunkKey, 0, -1);

    if (!chunkMessages.length) {
        return { rows: [], currentPage: pageNumber, totalPages: totalChunks, message: "No messages in this page." };
    }

    return {
        rows: chunkMessages.map((msg) => JSON.parse(msg)),
        currentPage: pageNumber,
        totalPages: totalChunks,
        hasNext: pageNumber < totalChunks,
        hasPrevious: pageNumber > 1
    };
};


/**
 * Deletes old chat messages beyond a certain limit.
 * @param chatId - The ID of the chat room
 * @param maxChunks - Maximum number of chunks to keep
 */
const cleanupOldChats = async (chatId, maxChunks = 12) => {
    const metaKey = getMetaKey(chatId);
    const meta = await redis.hgetall(metaKey);

    if (!meta || !meta.total_chunks) {
        return;
    }

    let totalChunks = Number(meta.total_chunks);
    if (totalChunks <= maxChunks) return;

    // Delete older chunks beyond the maxChunks limit
    for (let i = 1; i <= totalChunks - maxChunks; i++) {
        const chunkKey = getChunkKey(chatId, i);
        await redis.del(chunkKey);
    }

    // Update meta
    await redis.hset(metaKey, { total_chunks: maxChunks });
};


/**
 * Deletes a specific chat message from Redis.
 * @param chatId - The ID of the chat room.
 * @param messageId - The unique message ID to delete.
 */
const deleteChatMessage = async (chatId, messageId, userId, chunkIndex) => {
    if (!chatId || !messageId || !userId || !chunkIndex) {
        return { success: false, message: "Missing required parameters", chatId, messageId, userId, chunkIndex };
    }
    const metaKey = getMetaKey(chatId);
    const meta = await redis.hgetall(metaKey);

    if (!meta || !meta.total_chunks) {
        return { success: false, message: "Chat not found" };
    }

    let totalMessages = Number(meta.total_messages || 0);
    let totalChunks = Number(meta.total_chunks || 1);
    let messageDeleted = false;

    const pipeline = redis.multi(); // Batch commands for efficiency

    const chunkKey = getChunkKey(chatId, chunkIndex);
    const messages = await redis.lrange(chunkKey, 0, -1);

    // Find the exact message
    const targetMessage = messages.find((msg) => {
        const parsedMsg = JSON.parse(msg);
        return parsedMsg.id === messageId && parsedMsg?.userInfo?.user_id === userId;
    });

    if (targetMessage) {
        pipeline.lrem(chunkKey, 1, targetMessage); // Delete message
        totalMessages -= 1;
        messageDeleted = true;

        // Check if chunk is now empty
        if (messages.length === 1) {
            pipeline.del(chunkKey); // Delete the empty chunk
            totalChunks -= 1;
        }
    }


    if (messageDeleted) {
        pipeline.hset(metaKey, { total_messages: totalMessages, total_chunks: totalChunks });
        await pipeline.exec(); // Execute batched Redis commands
        return { success: true, message: "Chat message deleted", chatId, messageId };
    } else {
        return { success: false, message: "Message not found or not owned by the user" };
    }
};




export const chatServices = { storeChatMessage, getChatMessages, cleanupOldChats, deleteChatMessage };
