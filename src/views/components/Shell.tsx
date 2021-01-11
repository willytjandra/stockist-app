import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Shell.module.css';

const Nav: React.FC = () => (
  <nav className={styles.nav}>
    {/* <ul>
      <li>
        <NavLink exact to="/" activeClassName={styles.active}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/da" activeClassName={styles.active}>
          Dashboard 2
        </NavLink>
      </li>
    </ul> */}
  </nav>
);

export const Shell: React.FC = ({ children }) => (
  <>
    <header className={styles.header}>
      <Link to="/">
        <h1>Stockist</h1>
      </Link>
    </header>
    <Nav />
    <main className={styles.main}>{children}</main>
  </>
);
