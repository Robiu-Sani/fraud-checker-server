
import Redis from "ioredis"
import config from "../../config/index.js";

const redis = new Redis(config.REDIS_DB_URL);
// Test Connection
redis.ping().then((res) => {
    console.log("Redis Connected:", res); // Should print "PONG"
}).catch((err) => {
    console.error("Redis Connection Error:", err);
});
export default redis;