import React, { useContext } from "react";

import CountryContext from "../country-context/country-context.component";
import { Input } from "../../assets/styles/shared";

import { SearchContainer } from "./search-box.styles";

const SearchBox = () => {
  const { setSearchKeyword } = useContext(CountryContext);

  return (
    <SearchContainer>
      <Input
        type="search"
        placeholder="Search for the country name"
        large
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBox;
