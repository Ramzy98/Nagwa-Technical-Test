import database from '../database';

export type Word = {
  id: number;
  word: string;
  post: string;
};

export class WordStore {
  async getAll(): Promise<Word[]> {
    const result = await database.query(`SELECT * FROM words`);
    return result.rows;
  }
}
