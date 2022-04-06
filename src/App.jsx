// NPM packages
import { useTranslation } from "react-i18next";

// Project files
import NavigationBar from "components/NavigationBar";
import TextBlock from "components/TextBlock";
import "styles/style.sass";

export default function App() {
  const { t } = useTranslation();

  // Properties
  const headings = t("header:headings", { returnObjects: true });
  const aboutText = t("about:sections", { returnObjects: true });

  const eventLink =
    "https://www.eventbrite.com/e/find-your-next-developer-registration-306425897107";

  // Components
  const Headings = headings.map((item, index) => <div key={index}>{item}</div>);
  const TextBlocks = aboutText.map((item, index) => (
    <TextBlock key={index} item={item} />
  ));

  return (
    <div className="App">
      <NavigationBar />

      {/* Hero */}
      <header id="hero">
        <div className="content-center">
          <h1>{Headings}</h1>
          <a className="button" href={eventLink}>
            {t("header:button")}
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="container">
        {TextBlocks}
      </section>

      {/* Call to action */}
      <section id="call-to-action">
        <div className="content-center">
          <h2>{t("cta:title")}</h2>
          <a href={eventLink} className="button">
            {t("cta:button")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <small>{t("footer:text")}</small>
        </div>
      </footer>
    </div>
  );
}
