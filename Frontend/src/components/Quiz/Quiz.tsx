import Answer, { AnswerStatus } from './model';
import { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard/QuestionCard';
import Word from '../../models/Word';
import apiUrl from '../../utils/apiUrl';
import styles from './Quiz.module.css';

const QUESTION_MARK = 10;

export default function Quiz() {
  const [words, setWords] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchWords();
    async function fetchWords() {
      const res = await fetch(apiUrl('/words-random'));
      const data = await res.json();
      setWords(data);
    }
  }, []);

  const checkAnswer = (answer: Answer) => {
    if (words[answer.index].pos === answer.pos) {
      setScore(score + 1);
      return AnswerStatus.Correct;
    }
    return AnswerStatus.Incorrect;
  };

  const getNextQuestion = (currentIndex: number) => {
    setShowIndex(currentIndex + 1);
    if (words.length === 0) {
      setScore(0);
    }
    if (currentIndex === words.length - 1) {
      window.location.pathname = '/quiz/result/' + score * QUESTION_MARK;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Words Test</h1>
      Progress:{' '}
      <div className={styles.progressBar}>
        {
          <div
            className={styles.progress}
            style={
              showIndex !== 0
                ? { width: `${(showIndex / words.length) * 100}%` }
                : { width: '1%' }
            }
          >
            <span className={styles.progressPercentage}>
              {(showIndex / words.length) * 100}%
            </span>
          </div>
        }
      </div>
      <div className={styles.cardsContainer}>
        {words.map((word, index) => {
          if (index >= showIndex) {
            return (
              <QuestionCard
                key={index}
                word={word}
                index={index}
                checkAnswer={checkAnswer}
                getNextQuestion={getNextQuestion}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
