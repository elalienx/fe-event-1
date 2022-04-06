// Project files
import Logo from "assets/images/logo-white.png";
import { useState } from "react";

export default function NavigationBar({ item }) {
  // Local state
  const [language, setLanguage] = useState("en");

  // Properties
  const LanguageLabel = language === "en" ? "English" : "Swedish";

  // Methods
  function onLanguage() {
    if (language === "en") setLanguage("sv");
    else setLanguage("en");
  }

  // Components
  const Links = item.map((item, index) => (
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
