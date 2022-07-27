import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from './images/logo.png';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.container}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt='logo' />
      </Link>
      <ul
        className={classNames(styles.linksSection, {
          [styles.expanded]: showMenu,
        })}
      >
        <li className={styles.link}>
          <Link to='/'>Home</Link>
        </li>

        <li className={styles.link}>
          <Link to='/search-jobs'>Take words quiz</Link>
        </li>
      </ul>

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <GiHamburgerMenu className={styles.hamburgerIcon} size={25} />
      </div>
    </nav>
  );
}
