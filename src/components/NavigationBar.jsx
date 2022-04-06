// NPM packages
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Project files
import Logo from "assets/images/logo-white.png";
import i18n from "scripts/i18n";

export default function NavigationBar() {
  const { t } = useTranslation();

  // Local state
  const [language, setLanguage] = useState("en");

  // Properties
  const linkText = t("navigation:links", { returnObjects: true });
  const LanguageLabel = language === "en" ? "English" : "Swedish";

  // Methods
  function onLanguage() {
    if (language === "sv") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else {
      i18n.changeLanguage("sv");
      setLanguage("sv");
    }
  }

  // Components
  const Links = linkText.map((item, index) => (
    <a key={index} target="_blank" href={item.url}>
      {item.name}
    </a>
  ));

  return (
    <nav id="navigation-bar">
      {/* Logo */}
      <div className="container">
        <img src={Logo} alt="Novare logo with a handwritting overlay" />
        <span className="spacer">{/* empty on purpose */}</span>
        <div>{Links}</div>
        <button className="button" onClick={onLanguage}>
          {LanguageLabel}
        </button>
      </div>
    </nav>
  );
}
