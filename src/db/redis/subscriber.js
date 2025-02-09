import Redis from "ioredis";
import config from "../../config/index.js";
// import config from "../../config";

// Connect to Upstash Redis
const redisSub = new Redis(config.REDIS_DB_URL, {
    tls: true,
    password: config.REDIS_TOKEN,
});

const channel = "chat-room";

// Subscribe to the chat channel
redisSub.subscribe(channel, (err, count) => {
    if (err) {
        console.error("Subscription error:", err);
    } else {
        console.log(`Subscribed to ${count} channel(s).`);
    }
});

// Listen for messages
redisSub.on("message", (channel, message) => {
    const data = JSON.parse(message);
    console.log(`[${new Date(data.timestamp).toLocaleTimeString()}] ${data.username}: ${data.message}`);
});