import Answer, { AnswerStatus } from './model';
import { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard/QuestionCard';
import Word from '../../models/Word';
import apiUrl from '../../utils/apiUrl';
import styles from './Quiz.module.css';

const QUESTION_MARK = 5;

export default function Quiz() {
  const [words, setWords] = useState<Word[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchWords();
    async function fetchWords() {
      const res = await fetch(apiUrl('/words-random'));
      const data = await res.json();
      setWords(data);
      console.log(data);
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
    setWords(words.filter((_, index) => index !== currentIndex));
  };

  return (
    <div className={styles.container}>
      {score * QUESTION_MARK}
      <h1 className={styles.header}>Words Test</h1>
      <div className={styles.cardsContainer}>
        {words.map((word, index) => {
          return (
            <QuestionCard
              key={index}
              word={word}
              index={index}
              checkAnswer={checkAnswer}
              getNextQuestion={getNextQuestion}
            />
          );
        })}
      </div>
    </div>
  );
}
