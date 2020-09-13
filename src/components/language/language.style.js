import styled from "styled-components";

const LanguageContainer = styled.div`
  display: grid;
  grid-gap: calc(var(--spacing) / 2);
  justify-content: center;
  grid-template-columns: auto auto auto;
`;

const LanguageItem = styled.a`
  padding: var(--spacing);
  font-size: var(--small-font);
  border-radius: 50%;

  background-color: ${(props) =>
    props.active ? "var(--light-color)" : "none"};
`;

export { LanguageContainer, LanguageItem };
