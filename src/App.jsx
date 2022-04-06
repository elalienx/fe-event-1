// Project files
import about1 from "assets/images/about1.jpg";
import about2 from "assets/images/about2.jpg";
import about3 from "assets/images/about3.jpg";
import about4 from "assets/images/about4.jpg";
import NavigationBar from "components/NavigationBar";
import swedish from "translations/swedish.json";
import "styles/style.sass";

export default function App() {
  const { header, body, footer } = swedish;

  // Properties
  const eventLink =
    "https://www.eventbrite.com/e/find-your-next-developer-registration-306425897107";

  return (
    <div className="App">
      <NavigationBar />
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
            Anmäl dig nu
          </a>
        </div>
      </header>
      <section id="about" className="container">
        {/* Part 1 */}
        <article className="about-item">
          <img src={about1} alt="" />
          <div className="content">
            <p>{body.part1}</p>
          </div>
        </article>

        {/* Part 2 */}
        <article className="about-item">
          <img src={about2} alt="" />
          <div className="content">
            <p>{body.part2}</p>
          </div>
        </article>

        {/* Part 3 */}
        <article className="about-item">
          <img src={about3} alt="" />
          <div className="content">
            <p>{body.part3}</p>
          </div>
        </article>

        {/* Part 4 */}
        <article className="about-item">
          <img src={about4} alt="" />
          <div className="content">
            <h3>{body.part4.title}</h3>
            <ul>
              {body.part4.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>
      <section id="call-to-action">
        <div className="content-center">
          <h2>Säkra din plats nu!</h2>
          <a href={eventLink} className="button">
            Anmäl dig
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <small>{footer}</small>
        </div>
      </footer>
    </div>
  );
}
