import React from "react";
import { useTranslation } from "react-i18next";

import Language from "../language/language.component";
import { HeaderContainer, LogoContainer, Logo, Title } from "./header.styles";
// import LogoSrc from "../../assets/images/logo.png";

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <Language />
      <LogoContainer to="/">
        {/* <Logo src={LogoSrc} /> */}
        <Title>{t("title")}</Title>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
