import mongoose from 'mongoose';
import app from './app';
import config from './config';

main();

async function main() {
  try {
    await mongoose.connect(config.database as string);
  } catch (err) {
    console.log(err);
  }
  app.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
  });
}
