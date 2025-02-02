import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  port: process.env.PORT || 5001,
  database: process.env.DB_URL,
  secret_token: process.env.TOKEN,
};

export default config;
