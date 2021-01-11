import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { SearchBar } from 'views/components/searchBar/SearchBar';
import styles from './Dashboard.module.css';

type Ticker = {
  name: string;
  symbol: string;
  stockExchange: StockExchange;
};

type StockExchange = {
  name: string;
  symbol: string;
  country: string;
  website: string;
};

const API_KEY: string = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

export const Dashboard: React.FC = () => {
  const [tickers, setTickers] = useState<Ticker[]>();

  const handleSearch = (value: string) => {
    fetch(`http://api.marketstack.com/v1/tickers?access_key=${API_KEY}&search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setTickers(data.data);
        console.log(data);
      })
      .catch(console.error);
  };

  return (
    <>
      <SearchBar onSearch={(value) => handleSearch(value)} />
      <div className={styles.searchList}>
        {tickers?.map((ticker, index) => (
          <Card key={index} className={styles.searchItem}>
            <CardContent>
              <Typography component="h2">
                {ticker.name} ({ticker.symbol})
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
