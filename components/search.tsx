import React, { useState, ChangeEvent, useEffect } from 'react';

import SearchIcon from '@/components/search-icon';
import { pluckCoinNames } from '@/common/utils/formatters';

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
  const [inputValue, setInputValue] = useState('');
  const [coinNames, setCoinNames] = useState(['']);

  console.log('coins', coins);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
    setCoinNames(pluckCoinNames(coins));
  };

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
