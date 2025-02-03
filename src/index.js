import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { user_router } from './module/users/user.router.js';
import { fraud_router } from './module/fraud/fraud.router.js';
import dotenv from 'dotenv';
// import config from './config/index';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/v1/user', user_router);
app.use('/api/v1/fraud', fraud_router);

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

// app.listen(5000, () => {
//   console.log(config.port);
// });

app.use('/', (req, res) => {
  res.send('Fraud checker server is running');
});
