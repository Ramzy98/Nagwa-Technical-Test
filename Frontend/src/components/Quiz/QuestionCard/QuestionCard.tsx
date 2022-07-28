import Answer, { AnswerStatus } from '../model';
import Word, { WordPOS } from '../../../models/Word';
import { useEffect, useState } from 'react';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styles from './QuestionCard.module.css';

interface Props {
  word: Word;
  index: number;
  checkAnswer: (answer: Answer) => AnswerStatus;
  getNextQuestion: (index: number) => void;
}
export default function QuestionCard({
  word,
  index,
  checkAnswer,
  getNextQuestion,
}: Props) {
  const [currentAnswer, setCurrentAnswer] = useState(AnswerStatus.NotAnswered);
  const sendAnswer = (pos: WordPOS) => {
    setCurrentAnswer(
      checkAnswer({
        index,
        pos,
      })
    );
  };

  return (
    <div className={styles.container}>
      {currentAnswer === AnswerStatus.Incorrect ? (
        <div className={styles.incorrect}>
          <span>Incorrect Answer !</span>
        </div>
      ) : currentAnswer === AnswerStatus.Correct ? (
        <div className={styles.incorrect}>
          <span className={styles.correct}>Correct Answer !</span>
        </div>
      ) : (
        <></>
      )}
      <h2 className={styles.word}>{word.word}</h2>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Noun)}
        >
          Noun
        </button>
        <button
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Adverb)}
        >
          Adverb
        </button>
        <button
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Verb)}
        >
          Verb
        </button>
        <button
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Adjective)}
        >
          Adjective
        </button>
      </div>
      {currentAnswer !== AnswerStatus.NotAnswered && (
        <button
          className={styles.nextArrow}
          onClick={() => getNextQuestion(index)}
        >
          <BsFillArrowRightCircleFill size={30} />
        </button>
      )}
    </div>
  );
}
