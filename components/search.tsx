import React, { useState, ChangeEvent } from 'react';
import SearchIcon from '@/components/search-icon';

type SearchProps = {
  onInputChange: (inputValue: string) => void;
};

const Search: React.FC<SearchProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

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
