import React from "react";
import { useTranslation } from "react-i18next";

import { LanguageContainer, LanguageItem } from "./language.style";

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <LanguageContainer>
      <LanguageItem
        href="#en"
        onClick={() => i18n.changeLanguage("en-US")}
        active={i18n.language === "en-US"}
      >
        EN
      </LanguageItem>
      <LanguageItem
        href="#se"
        onClick={() => i18n.changeLanguage("se-SE")}
        active={i18n.language === "se-SE"}
      >
        SE
      </LanguageItem>
      <LanguageItem
        href="#fr"
        onClick={() => i18n.changeLanguage("fr-FR")}
        active={i18n.language === "fr-FR"}
      >
        FR
      </LanguageItem>
    </LanguageContainer>
  );
};

export default Language;
