import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import CountryContext from "../country-context/country-context.component";
import { Input } from "../../assets/styles/shared";

import { SearchContainer } from "./search-box.styles";

const SearchBox = () => {
  const { t } = useTranslation();
  const { setSearchKeyword } = useContext(CountryContext);

  return (
    <SearchContainer>
      <Input
        type="search"
        placeholder={t("search_placeholder")}
        large
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBox;
