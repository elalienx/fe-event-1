// Project files
import NavigationBar from "components/NavigationBar";
import TextBlock from "components/TextBlock";
import english from "translations/english.json";
import "styles/style.sass";

export default function App() {
  const { navigation, header, about, cta, footer } = english;

  // Properties
  const eventLink =
    "https://www.eventbrite.com/e/find-your-next-developer-registration-306425897107";

  // Components
  const TextBlocks = about.map((item, index) => (
    <TextBlock key={index} item={item} />
  ));

  return (
    <div className="App">
      <NavigationBar item={navigation} />

      {/* Hero */}
      <header id="hero">
        <div className="content-center">
          <h1 className="title">
            {header.title}
            <br />
            och
            <br />
            {header.subtitle}
            <br />
            när
            <br />
            {header.date}
            <br />
            var
            <br />
            Orangieret, Blaseiholmsgatan 4b
          </h1>
          <a className="button" href={eventLink}>
            {header.button}
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
          <h2>{cta.title}</h2>
          <a href={eventLink} className="button">
            {cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <small>{footer}</small>
        </div>
      </footer>
    </div>
  );
}
