import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  port: process.env.PORT || 5001,
  database: process.env.DB_URL,
  secret_token: process.env.TOKEN,
  REDIS_DB_URL: process.env.REDIS_DB_URL,
  REDIS_TOKEN: process.env.REDIS_TOKEN
};

export default config;
