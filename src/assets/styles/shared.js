import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  border: 1px solid var(--light-color);
  background-color: var(--white-color);
  border-radius: var(--spacing);
  max-width: 100%;

  ${(props) => {
    if (props.small) {
      return `
        padding: var(--spacing);
        font-size: var(--small-font);
      `;
    }

    if (props.medium) {
      return `
        padding: calc(var(--spacing) * 2);
        font-size: var(--medium-font);
      `;
    }

    if (props.large) {
      return `
        padding: calc(var(--spacing) * 4);
        font-size: var(--large-font);
      `;
    }
  }}
`;

export { Input };
