import React, { useState } from 'react';
import axios from 'axios';

import { SearchContainer, SearchInput, SearchButton, Text } from './styles';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearch = async () => {
  };

  return (
    <SearchContainer>
      <Text>
        Choose your muscle group buddy!
      </Text>
      <SearchInput placeholder="example: 'biceps'" value={query} onChangeText={handleInputChange} />
      <SearchButton title="Yeah Buddy!" onPress={handleSearch} />
    </SearchContainer>
  );
}

export default SearchBar;
