import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { user_router } from './module/users/user.router';
import { fraud_router } from './module/fraud/fraud.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', user_router);
app.use('/api/v1/fraud', fraud_router);

app.use('/', (req: Request, res: Response) => {
  res.send('Fraud checker server is running');
});

export default app;
