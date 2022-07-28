import express, { Request, Response } from 'express';

import { WordStore } from '../models/word';

const store = new WordStore();

// Get all words from database
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

// Get random words from database
const getRandomWord = async (req: Request, res: Response) => {
  try {
    const word = await store.getRandom();
    res.json(word);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    }
  }
};

// Configure word routes
const word_routes = (app: express.Application) => {
  app.get('/words-list', index);
  app.get('/words-random', getRandomWord);
};

export default word_routes;
