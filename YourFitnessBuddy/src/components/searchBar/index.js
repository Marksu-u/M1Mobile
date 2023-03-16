import React, { useState } from 'react';
import axios from 'axios';

import { SearchContainer, SearchInput, SearchButton, Text } from './styles';

const apiKey = 'MNSHnjoIkSPsM82E/MpAUA==KHC6mN8WSMuOwa0l';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearch = async () => {
    const options = {
      headers: {
        'X-Api-Key': apiKey
      }
    };
  
    const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${query}`, options);
    setResults(response.data);
  };

  return (
    <SearchContainer>
      <Text>
        Let's get you jacked!
      </Text>
      <Text>
        Choose your muscle group buddy!
      </Text>
      <SearchInput placeholder="example: 'biceps'" value={query} onChangeText={handleInputChange} />
      <SearchButton title="Yeah Buddy!" onPress={handleSearch} />
    </SearchContainer>
  );
}

export default SearchBar;
