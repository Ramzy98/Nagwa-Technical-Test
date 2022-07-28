export default interface Word {
  id: number;
  word: string;
  pos: WordPOS;
}

export enum WordPOS {
  Noun = 'noun',
  Verb = 'verb',
  Adjective = 'adjective',
  Adverb = 'adverb',
}
