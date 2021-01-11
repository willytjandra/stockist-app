import { Paper, Input, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  return (
    <Paper className={styles.searchBar}>
      <Input
        fullWidth
        disableUnderline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.searchBox}
        autoFocus={true}
        placeholder="Enter ticker name or symbol"
      />
      <IconButton onClick={(e) => onSearch(value)}>
        <Search />
      </IconButton>
    </Paper>
  );
};
