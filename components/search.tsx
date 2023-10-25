import SearchIcon from '@/components/search-icon';

interface SearchProps {}

export default function Search({}: SearchProps) {
  return (
    <div className="search-container">
      <div className="search-icon">
        <SearchIcon />
      </div>

      <input type="search" placeholder="Search coins" />
    </div>
  );
}
