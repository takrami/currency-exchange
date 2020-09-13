import React, { useContext, useState, useEffect } from "react";

import CountryItem from "../country-item/country-item.component";
import CountryContext from "../country-context/country-context.component";
import { StyledCountriesList } from "./countries-list.styles";

const CountriesList = ({ countries, rates }) => {
  const { searchKeyword } = useContext(CountryContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchKeyword.length > 2) {
      const results = countries.filter((country) =>
        country.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, countries]);

  return (
    <StyledCountriesList>
      {searchResults.map((country) => {
        const itemsRates = {};
        country.currencies.forEach((c) => {
          if (rates[c.code]) {
            itemsRates[c.code] = rates[c.code] / rates.SEK;
          }
        });
        return (
          <CountryItem
            key={country.alpha3Code}
            country={country}
            itemsRates={itemsRates}
          />
        );
      })}
    </StyledCountriesList>
  );
};

export default CountriesList;
