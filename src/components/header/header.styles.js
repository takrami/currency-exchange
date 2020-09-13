import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 1rem;
  display: grid;
  justify-content: center;
`;

const LogoContainer = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
`;

const Logo = styled.img`
  width: 85px;
`;

const Title = styled.h1`
  font-size: var(--larger-font);
  color: var(--main-color);
  margin-bottom: 0;
  text-align: center;
`;

export { HeaderContainer, LogoContainer, Logo, Title };
