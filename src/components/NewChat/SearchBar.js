import React from "react";
// Styling
import { FlexStyle, SearchBarStyled } from "../../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle style={{ margin: "20px" }}>
      <SearchBarStyled
        placeholder="Search for friend"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </FlexStyle>
  );
};

export default SearchBar;
