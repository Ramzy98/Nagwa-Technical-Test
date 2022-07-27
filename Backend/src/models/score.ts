import database from '../database';

export type Score = {
  score: number;
};

export class ScoreStore {
  async getAll(): Promise<Score[]> {
    const result = await database.query(`SELECT * FROM scores`);
    return result.rows;
  }
}
