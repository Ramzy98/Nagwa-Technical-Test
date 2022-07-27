import database from '../database';

export type Score = {
  score: number;
};

export class ScoreStore {
  async getAll(): Promise<Score[]> {
    const result = await database.query(`SELECT * FROM scores`);
    return result.rows;
  }

  async addScore(score: number): Promise<void> {
    const result = await database.query(`INSERT INTO scores (score) VALUES ($1)`, [score]);
    return result.rows[0];
  }
}
