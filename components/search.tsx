import React, { ChangeEvent, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@/components/search-icon';
import { pluckCoinNames } from '@/common/utils/formatters';
import { pythCoins } from '@/common/constants/pyth-coins';

interface Coin {
  name: string;
  symbol: string;
  price: string;
}

type SearchProps = {
  onInputChange: (inputValue: string) => void;
  valueToChange: string;
  coins: Coin[];
};

const Search: React.FC<SearchProps> = ({
  onInputChange,
  valueToChange,
  coins,
}) => {
  // TODO
  // Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
  // const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [coinNames, setCoinNames] = useState(['']);
  const [filter, setFilter] = useState('');

  console.log('coins', coins);

  const handleCoinClick = (coin: any) => {};

  const filteredCoins = useMemo(() => {
    if (!filter) return pythCoins;
    return pythCoins.filter(
      coin =>
        coin.symbol.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        coin.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }, [filter]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
    setCoinNames(pluckCoinNames(coins));
  };

  // TODO
  // Goal when user is searching, send what they type to filter out coins via the pythCoins.ts
  // Then once a coin is selected return a coin object with it's current price

  useEffect(() => {
    if (valueToChange === '') {
      setInputValue(valueToChange);
    }
  }, [valueToChange]);

  return (
    <div className="search-container">
      <div className="search-input">
        <div className="search-icon">
          <SearchIcon />
        </div>

        <input
          type="search"
          value={inputValue}
          placeholder="Search coins"
          onChange={handleInputChange}
        />
      </div>

      {inputValue != '' && (
        <div className="search-dropdown">
          <div>
            <ul>
              {coinNames.map((coin, i) => (
                <li key={i}>{coin}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
