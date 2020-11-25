import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="p2">
      <input
        type="search"
        placeholder="Search for Robots"
        className="pa3 ba b--violet bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
