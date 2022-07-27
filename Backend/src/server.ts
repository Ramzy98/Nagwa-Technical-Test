import express, { Request, Response } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import score_routes from '../src/handlers/scores';
import word_routes from '../src/handlers/words';

dotenv.config();
const app: express.Application = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.json('Hello World!');
});

word_routes(app);
score_routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
