import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from 'views/App.module.css';
import { Routes } from './routes/Routes';

export const App: React.FC = () => (
  <div className={styles.root}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);
