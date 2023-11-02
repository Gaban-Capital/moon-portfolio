'use client';

import { FC, useEffect, useState } from 'react';

import CoinBlock from '@/components/coin-block';
import CurrencySwitch from '@/components/currency-switch';
import Logo from '@/components/logo';
import Nav from '@/components/nav';
import Overlay from '@/components/overlay';
import Search from '@/components/search';
import Toggle from '@/components/toggle';
import TotalValue from '@/components/total-value';
import { MOON_PORTFOLIO } from '@/common/constants/copy';
import { unsetToken } from '@/common/lib/auth';
import { formatToDollars } from '@/common/utils/formatters';
import { formatDate } from '@/common/utils/formatters';

interface portfolioProps {}

interface Coin {
  name: string;
  symbol: string;
  price: string;
  position: number;
}

const page: FC<portfolioProps> = ({}) => {
  const [searchText, setInputResult] = useState('');
  const [toggleType, setToggleType] = useState('grid');
  const [currency, setCurrency] = useState('usd');
  const [coinPortfolio, setCoinPortfolio] = useState<Coin[]>([]);

  const portfolioValue =
    currency === 'usd' ? formatToDollars(1597010.15) : '1597010.15';

  const handleOverlayClick = () => setInputResult('');

  const currentDate = formatDate();

  return (
    <div className="portfolio-container">
      <Overlay searching={searchText} clickHandler={handleOverlayClick} />

      <header>
        <div className="portfolio-logo">
          <Logo />
          <h1 className="logo-text mt-0 brightness-150 text-xl">
            {MOON_PORTFOLIO}
          </h1>
        </div>

        <div className="current-date">{currentDate}</div>

        <Search />
      </header>

      <div>
        <TotalValue type="usd" total={portfolioValue} />
        <CurrencySwitch />
        <Toggle type="grid" />
      </div>
      <div>
        {coinPortfolio?.map((coin, i) => (
          <li key={i}>
            <CoinBlock coin={coin} />
          </li>
        ))}
      </div>
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
