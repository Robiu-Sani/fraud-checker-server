import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { admin_router } from './module/admin/admin.router.js';
import { fraud_router } from './module/fraud/fraud.router.js';
import dotenv from 'dotenv';
import { user_router } from './module/user/user.router.js';
import { contact_router } from './module/contact/contact.router.js';
import { verify_route } from './module/verifiedCompany/verifiedCompany.router.js';
import { chat_router } from './module/chat/global/chat.router.js';
// import config from './config/index';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/v1/admin', admin_router);
app.use('/api/v1/user', user_router);
app.use('/api/v1/contact', contact_router);
app.use('/api/v1/fraud', fraud_router);
app.use('/api/v1/verify', verify_route);
app.use('/api/v1/chat', chat_router);

main();

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (err) {
    console.log(err);
  }
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
}

app.use('/', (req, res) => {
  res.send('Fraud checker server is running');
});
