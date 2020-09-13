import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <CountryItemContainer>
      <CountryDetails>
        <CountryDetailsTitle>
          <CountryFlag src={country.flag} /> {country.name}
        </CountryDetailsTitle>
        <CountryDetailsItem>
          {t("capital")} :<strong>{country.capital}</strong>{" "}
        </CountryDetailsItem>
        <CountryDetailsItem>
          {t("population")}: <strong>{formatNumber(country.population)}</strong>
        </CountryDetailsItem>
      </CountryDetails>
      <CurrencyExchange>
        <CountryDetailsTitle>
          <Amount> {t("amount_in_sek")} </Amount>
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
