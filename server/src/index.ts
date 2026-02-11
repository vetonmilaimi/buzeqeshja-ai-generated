import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import scheduleRouter from './email';
import logger from './logger';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', scheduleRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
