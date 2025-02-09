import Redis from "ioredis";
import config from "../../config";

// Connect to Upstash Redis (replace with your Upstash URL and token)
const redisPub = new Redis(config.REDIS_DB_URL, {
    tls: true, // Required for Upstash WebSocket connection
    password: config.REDIS_TOKEN,
});

const channel = "chat-room";

/**
 * Publishes a message to the Redis channel
 * @param {string} username - username of the sender
 * @param {string} message - message to be sent
 * @returns {Promise<void>}
 */
export const sendMessage = async (username, message) => {
    const payload = JSON.stringify({ username, message, timestamp: Date.now() });
    await redisPub.publish(channel, payload);
    console.log(`Sent: ${payload}`);
}

// Example usage
// sendMessage("Masum", "Hello, this is a test message!");