'use client';

import { FC, useEffect, useState } from 'react';

import Logo from '@/components/logo';
import CoinBlock from '@/components/coin-block';
import CurrencySwitch from '@/components/currency-switch';
import Nav from '@/components/nav';
import Toggle from '@/components/toggle';
import TotalValue from '@/components/total-value';
import { MOON_PORTFOLIO } from '@/common/constants/copy';
import Search from '@/components/search';

interface portfolioProps {}

async function getPosts() {
  let res = await fetch('https://dummyjson.com/posts?limit=3');
  return res.json();
}

const page: FC<portfolioProps> = ({}) => {
  const [searching, setSearching] = useState(false);
  const [searchText, setInputResult] = useState('');
  const [toggleType, setToggleType] = useState('grid');
  const [currency, setCurrency] = useState('currency');
  const [coinPortfolio, setCoinPortfolio] = useState([]);

  const handleInputUpdate = (value: string) => {
    setInputResult(value);
  };

  return (
    <div className="portfolio-container">
      <header>
        <div className="portfolio-logo">
          <Logo />
          <h1 className="logo-text mt-0 brightness-150 text-xl">
            {MOON_PORTFOLIO}
          </h1>
        </div>
        <Search onInputChange={handleInputUpdate} />
      </header>

      <div>
        <p>Input Result: {searchText}</p>
      </div>

      <div>
        <TotalValue type="usd" total={1000000.0} />
        <CurrencySwitch />
        <Toggle type="grid" />
      </div>
      <div>{coinPortfolio?.map((coin, i) => <li key={i}>{coin}</li>)}</div>
      <Nav />
    </div>
  );
};

export default page;
