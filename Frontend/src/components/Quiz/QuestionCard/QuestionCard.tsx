import Answer, { AnswerStatus } from '../model';
import Word, { WordPOS } from '../../../models/Word';
import { useEffect, useState } from 'react';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import classNames from 'classnames';
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

  const handleClick = () => {
    getNextQuestion(index);
    setCurrentAnswer(AnswerStatus.NotAnswered);
  };

  return (
    <div className={styles.container}>
      {currentAnswer === AnswerStatus.Incorrect ? (
        <div className={styles.incorrect}>
          <span>Incorrect Answer!</span>
        </div>
      ) : currentAnswer === AnswerStatus.Correct ? (
        <div className={styles.incorrect}>
          <span className={styles.correct}>Correct Answer!</span>
        </div>
      ) : (
        <>
          <div className={styles.incorrect}>
            <span className={styles.NotAnswered}>Not Answered yet!</span>
          </div>
        </>
      )}
      <h2 className={styles.word}>{word.word}</h2>
      <div className={styles.buttonsContainer}>
        <button
          disabled={currentAnswer !== AnswerStatus.NotAnswered}
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Noun)}
        >
          Noun
        </button>
        <button
          disabled={currentAnswer !== AnswerStatus.NotAnswered}
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Adverb)}
        >
          Adverb
        </button>
        <button
          disabled={currentAnswer !== AnswerStatus.NotAnswered}
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Verb)}
        >
          Verb
        </button>
        <button
          disabled={currentAnswer !== AnswerStatus.NotAnswered}
          className={styles.button}
          onClick={() => sendAnswer(WordPOS.Adjective)}
        >
          Adjective
        </button>
      </div>
      <button
        className={classNames(styles.nextArrow, {
          [styles.hide]: currentAnswer === AnswerStatus.NotAnswered,
        })}
        onClick={handleClick}
      >
        <BsFillArrowRightCircleFill size={30} />
      </button>
    </div>
  );
}
