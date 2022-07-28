// Define Words interface
export default interface Word {
  id: number;
  word: string;
  pos: WordPOS;
}

// we have a 4 types of words
export enum WordPOS {
  Noun = 'noun',
  Verb = 'verb',
  Adjective = 'adjective',
  Adverb = 'adverb',
}
