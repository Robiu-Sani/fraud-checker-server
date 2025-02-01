import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/', (req: Request, res: Response) => {
  res.send('Fraud checker server is running');
});

export default app;
