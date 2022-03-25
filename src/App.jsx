// Project files
import NavigationBar from "components/NavigationBar";
import english from "data/english.json";
import "styles/style.sass";

export default function App() {
  const { header, body, footer } = english;

  // Properties
  const eventLink =
    "https://www.eventbrite.com/e/find-your-next-developer-registration-306425897107";

  return (
    <div className="App">
      <NavigationBar />
      <header className="hero">
        <div className="content-center">
          <h1 className="title">{header.title}</h1>
          <div className="math-symbols">+</div>
          <span className="subtitle">{header.subtitle}</span>
          <div className="math-symbols">=</div>
          <span className="date">{header.date}</span>
        </div>
      </header>
      <section className="about container">
        <h2>About the event</h2>
        {/* Part 1 */}
        <article className="item-information">
          <img src="" alt="" />
          <div className="content">
            <p>{body.part1}</p>
          </div>
        </article>

        {/* Part 2 */}
        <article className="item-information">
          <img src="" alt="" />
          <div className="content">
            <p>{body.part2}</p>
          </div>
        </article>

        {/* Part 3 */}
        <article className="item-information">
          <img src="" alt="" />
          <div className="content">
            <p>{body.part3}</p>
          </div>
        </article>

        {/* Part 4 */}
        <article className="item-information">
          <img src="" alt="" />
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
      <section className="call-to-action">
        <div className="content-center">
          Book your ticket now!
          <a href={eventLink} className="button">
            Register now
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>{footer}</p>
        </div>
      </footer>
    </div>
  );
}
