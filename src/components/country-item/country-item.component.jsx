import React, { useState } from "react";

import { formatNumber } from "../../utils";
import { Input } from "../../assets/styles/shared";
import {
  CountryItemContainer,
  CountryDetails,
  CountryDetailsItem,
  CountryDetailsTitle,
  Amount,
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
        <CountryDetailsItem>
          Capital: <strong>{country.capital}</strong>{" "}
        </CountryDetailsItem>
        <CountryDetailsItem>
          Population: <strong>{formatNumber(country.population)}</strong>
        </CountryDetailsItem>
      </CountryDetails>
      <CurrencyExchange>
        <CountryDetailsTitle>
          <Amount>Amount in SEK</Amount>
          <Input
            type="number"
            small
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
        </CountryDetailsTitle>

        {country.currencies.map((currency) => {
          if (!currency.code || currency.code === "(none)") {
            return null;
          }

          return (
            <CountryDetailsItem key={currency.code}>
              {currency.code} :{" "}
              <strong>{(base * itemsRates[currency.code]).toFixed(2)}</strong>
            </CountryDetailsItem>
          );
        })}
      </CurrencyExchange>
    </CountryItemContainer>
  );
};

export default CountryItem;
