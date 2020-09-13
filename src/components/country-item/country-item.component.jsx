import React, { useState } from "react";

import { formatNumber } from "../../utils";
import { Input } from "../../assets/styles/shared";
import {
  CountryItemContainer,
  CountryDetails,
  CountryDetailsItem,
  CountryDetailsTitle,
  CountryFlag,
  CurrencyExchange,
} from "./country-item.styles";

const CountryItem = ({ country, itemsRates }) => {
  const [base, setBase] = useState(1);

  return (
    <CountryItemContainer>
      <CountryDetails>
        <CountryDetailsTitle>
          <CountryFlag src={country.flag} /> {country.name}
        </CountryDetailsTitle>
        <CountryDetailsItem>Capital: {country.capital}</CountryDetailsItem>
        <CountryDetailsItem>
          Population: {formatNumber(country.population)}
        </CountryDetailsItem>
      </CountryDetails>
      <CurrencyExchange>
        <span>
          <CountryDetailsTitle>
            Amount in SEK
            <Input
              type="number"
              small
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          </CountryDetailsTitle>
        </span>

        {country.currencies.map((currency) => {
          if (!currency.code || currency.code === "(none)") {
            return null;
          }

          return (
            <CountryDetailsItem key={currency.code}>
              {currency.code} : {(base * itemsRates[currency.code]).toFixed(2)}
            </CountryDetailsItem>
          );
        })}
      </CurrencyExchange>
    </CountryItemContainer>
  );
};

export default CountryItem;
