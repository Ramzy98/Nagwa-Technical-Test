import { WordPOS } from '../../models/Word';

export default interface Answer {
  index: number;
  pos: WordPOS;
}

export enum AnswerStatus {
  Correct = 'correct',
  Incorrect = 'incorrect',
  NotAnswered = 'not-answered',
}
