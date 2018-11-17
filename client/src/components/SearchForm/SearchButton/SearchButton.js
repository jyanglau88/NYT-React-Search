import React from 'react';

const SearchButton = (props) => (
    <button
      onClick={props.clicked}
      className="btn btn-warning">
      Search
    </button>
);

export default SearchButton;