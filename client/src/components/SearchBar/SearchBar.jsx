import styles from './SearchBar.module.css';

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input className={styles.searchbarInput}
        type="text"
        placeholder="Search motorcycles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.searchBarButton} onClick={handleSearch}>Search <i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
};

export default SearchBar;
