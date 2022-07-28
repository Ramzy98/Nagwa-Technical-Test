import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import apiUrl from '../../utils/apiUrl';
import styles from './Rank.module.css';

export default function Rank() {
  const params = useParams();
  const { score } = params;
  const [rank, setRank] = useState(0);
  useEffect(() => {
    fetchWords();
    async function fetchWords() {
      const res = await fetch(apiUrl(`/score-rank/${score}`));
      const data = await res.json();
      setRank(parseFloat(data.scorePercentage));
    }
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Words Test</h1>
      <div className={styles.scoreContainer}>
        <h2 className={styles.scoreHeader}> Your score: </h2>
        <span className={styles.score}>{score}</span>
        <b>/ 100</b>
      </div>
      <div className={styles.scoreContainer}>
        <h2 className={styles.scoreHeader}>
          {' '}
          Where You stand among your rivals:{' '}
        </h2>
        <span className={styles.score}> {rank}</span>
      </div>
      <Link className={styles.tryAgainButton} to='/take-quiz'>
        Try Again
      </Link>
    </div>
  );
}
