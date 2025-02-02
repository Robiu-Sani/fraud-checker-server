import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { user_router } from './module/users/user.router.js';
import { fraud_router } from './module/fraud/fraud.router.js';
// import config from './config/index';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', user_router);
app.use('/api/v1/fraud', fraud_router);

main();

const uri =
  'mongodb+srv://auroDev:PxtOIPh0SWlAJP6VauroDev@cluster0.td0ls.mongodb.net/scambd?retryWrites=true&w=majority';

async function main() {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
  app.listen(5001, () => {
    console.log(`server is running on port ${5001}`);
  });
}

// app.listen(5000, () => {
//   console.log(config.port);
// });

app.use('/', (req, res) => {
  res.send('Fraud checker server is running');
});
