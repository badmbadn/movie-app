import React from 'react';
import { Input } from 'antd';
import './search-input.css';

const SearchInput = (props) => {
  return (
    <form className="form-input">
      <Input
        type="search"
        placeholder="Type to search ... "
        className="search-input"
        onChange={(e) => props.searchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
