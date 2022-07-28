import database from '../database';

export type Word = {
  id: number;
  word: string;
  post: string;
};

export class WordStore {
  // Get all words from database
  async getAll(): Promise<Word[]> {
    const result = await database.query(`SELECT * FROM words`);
    return result.rows;
  }

  async getRandom(): Promise<Word[]> {
    const result = await database.query(
      `SELECT * FROM words WHERE pos = 'adjective' OR pos = 'adverb'
         OR pos = 'noun' OR pos = 'verb' ORDER BY random() LIMIT 10`
    ); // Get random words from database with random() function
    // to avoid duplicates in the result set(10 words)
    return result.rows;
  }
}
