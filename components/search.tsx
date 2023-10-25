import React, { useState, ChangeEvent, useEffect } from 'react';
import SearchIcon from '@/components/search-icon';

type SearchProps = {
  onInputChange: (inputValue: string) => void;
  valueToChange: string;
};

const Search: React.FC<SearchProps> = ({ onInputChange, valueToChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [searching, setSearching] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  useEffect(() => {
    if (valueToChange === '') {
      setInputValue(valueToChange);
    }
  }, [valueToChange]);

  return (
    <div className="search-container">
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
  );
};

export default Search;
