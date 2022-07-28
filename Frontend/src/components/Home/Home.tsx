import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Test() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Words Quiz</h1>
      <p className={styles.introduction}>
        Proin ante augue, lobortis nec tellus id, cursus malesuada leo. Ut leo
        nisi, congue vel blandit eu, efficitur varius libero. Nullam tempor
        purus porttitor scelerisque lacinia. Suspendisse potenti. Donec blandit
        vel odio sed interdum. Nulla facilisi. Sed id sapien dignissim, mollis
        lacus dictum, interdum nibh. Nullam at nunc varius lectus posuere
        venenatis.
      </p>
      <Link className={styles.button} to='/take-quiz'>
        Start
      </Link>
    </div>
  );
}
