import express, { Request, Response } from 'express';

import { ScoreStore } from '../models/score';

const store = new ScoreStore();

// Get all scores from database
const index = async (req: Request, res: Response) => {
  try {
    const scores = await store.getAll();
    res.json(scores);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    }
  }
};

// Calculate score rank based on other scores
const getScoreRank = async (req: Request, res: Response) => {
  try {
    const score = parseInt(req.params.score);
    const scores = await store.getAll();
    const scoreCount = scores.filter((s) => s.score < score).length;
    const scorePercentage = ((scoreCount / scores.length) * 100).toFixed(2);
    res.json({ scorePercentage });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    }
  }
};

// Configure score routes
const score_routes = (app: express.Application) => {
  app.get('/scores-list', index);
  app.get('/score-rank/:score', getScoreRank);
};

export default score_routes;
