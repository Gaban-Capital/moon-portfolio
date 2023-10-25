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
import { unsetToken } from '@/common/lib/auth';

interface portfolioProps {}

async function getPosts() {
  let res = await fetch('https://dummyjson.com/posts?limit=3');
  return res.json();
}

const page: FC<portfolioProps> = ({}) => {
  const [toggleType, setToggleType] = useState('grid');
  const [currency, setCurrency] = useState('currency');
  const [coinPortfolio, setCoinPortfolio] = useState([]);

  return (
    <div className="portfolio-container">
      <header>
        <div className="portfolio-logo">
          <Logo />
          <h1 className="logo-text mt-0 brightness-150 text-xl">
            {MOON_PORTFOLIO}
          </h1>
        </div>
        <Search />
      </header>
      <div>
        <TotalValue type="usd" total={1000000.0} />
        <CurrencySwitch />
        <Toggle type="grid" />
      </div>
      <div>{coinPortfolio?.map((coin, i) => <li key={i}>{coin}</li>)}</div>
      <Nav />
      <button
        onClick={() => {
          unsetToken();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default page;
