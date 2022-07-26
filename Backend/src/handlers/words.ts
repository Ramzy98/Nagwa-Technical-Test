import express, { Request, Response } from 'express';

import { WordStore } from '../models/words';

const store = new WordStore();

const index = async (req: Request, res: Response) => {
  try {
    const words = await store.getAll();
    res.json(words);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    }
  }
};

const word_routes = (app: express.Application) => {
  app.get('/words-list', index);
};

export default word_routes;
