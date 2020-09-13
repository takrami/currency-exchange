import React, { useState, useEffect } from "react";

import { getEnv } from "../../utils";
import CountriesList from "../countries-list/countries-list.component";
import SearchBox from "../search-box/search-box.component";
import CountryContext from "../country-context/country-context.component";
import Loading from "../loading/loading.component";

const { COUNTRY_BASE_URL, CURRENCY_BASE_URL, CURRENCY_API_KEY } = getEnv();

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [rates, setRates] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(COUNTRY_BASE_URL);
      const data = await response.json();
      setCountries(data);
    }

    async function fetchRates() {
      const response = await fetch(
        `${CURRENCY_BASE_URL}?access_key=${CURRENCY_API_KEY}`
      );
      const data = await response.json();
      setRates(data.rates);
    }
    fetchCountries();
    fetchRates();
  }, []);

  if (countries.length === 0) {
    return <Loading />;
  }

  return (
    <CountryContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      <SearchBox />
      <CountriesList countries={countries} rates={rates} />
    </CountryContext.Provider>
  );
};

export default CountryContainer;
