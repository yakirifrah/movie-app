import {SearchBar} from 'react-native-elements';
import React from 'react';

const Search = ({search, searchValueChange}) => {
  const updateSearch = (search) => {
    searchValueChange(search);
  };
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      platform={'ios'}
    />
  );
};

export default Search;
