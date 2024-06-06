import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search"
      value={searchTerm}
      onChange={handleSearch}
      variant="outlined"
    />
  );
};

export default SearchBar;