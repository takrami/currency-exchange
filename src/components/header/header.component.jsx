import React from "react";
import { useTranslation } from "react-i18next";

import Language from "../language/language.component";
import { HeaderContainer, LogoContainer, Title } from "./header.styles";

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <Language />
      <LogoContainer to="/">
        <Title>{t("title")}</Title>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
