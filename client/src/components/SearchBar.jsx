import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input style={{fontSize:'24px'}}
        type="text"
        placeholder="Search motorcycles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='btn submit' onClick={handleSearch}>Search <i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
};

export default SearchBar;
