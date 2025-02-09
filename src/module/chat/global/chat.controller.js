import { chatServices } from "./chat.services.js";

const insertChat = async (req, res) => {
    try {
        const payload = req.body;
        const data = await chatServices.storeChatMessage(payload);
        res.status(201).json({
            status: true,
            message: 'Message inserted successfully',
            data,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Something went wrong to insert message',
            error,
        });
    }
};

const getAllChatMessages = async (req, res) => {
    try {
        const chatId = req.params.id;
        const page = req.query.page || 1;
        const data = await chatServices.getChatMessages(chatId, page);
        res.json({
            status: true,
            message: 'Messages get successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Something went wrong to fetched messages',
            error,
        });
    }
};

const deleteChatMessage = async (req, res) => {
    try {
        const { id, messageId, userId, chunkIndex } = req.params;
        const data = await chatServices.deleteChatMessage(id, messageId, userId, chunkIndex);
        res.json({
            status: true,
            message: 'Message deleted successfully',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Something went wrong to delete message',
            error: error,
        });
    }
};

export const chatController = {
    insertChat,
    getAllChatMessages,
    deleteChatMessage,
};