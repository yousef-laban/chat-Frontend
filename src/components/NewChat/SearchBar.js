import React from "react";
// Styling
import { FlexStyle, SearchBarStyled1 } from "../../styles";

const SearchBar = (props) => {
  return (
    <div className="p2">
      <SearchBarStyled1
        placeholder="Add new friend"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
