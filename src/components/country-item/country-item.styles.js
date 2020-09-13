import styled from "styled-components";

const CountryItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(var(--spacing) * 2);
  max-width: var(--main-wrapper);
`;

const CountryDetails = styled.ul`
  background-color: var(--white-color);
  padding: calc(var(--spacing) * 2);
`;

const CountryDetailsTitle = styled.h2`
  font-weight: var(--bold-font);
  font-size: var(--medium-font);
  color: var(--darker-color);
`;

const CountryDetailsItem = styled.li`
  color: var(--dark-color);
  font-size: var(--small-font);
`;

const Amount = styled.span`
  padding-right: calc(var(--spacing) * 2);
`;

const CountryFlag = styled.img`
  width: 20px;
`;

const CurrencyExchange = styled.div`
  background-color: var(--white-color);
  padding: calc(var(--spacing) * 2);
  font-size: var(--medium-font);
`;

export {
  CountryItemContainer,
  CountryDetails,
  CountryDetailsTitle,
  CountryDetailsItem,
  Amount,
  CountryFlag,
  CurrencyExchange,
};
