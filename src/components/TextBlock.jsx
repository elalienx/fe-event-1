export default function TextBlock({ item }) {
  const { title, text, bullets, imageURL } = item;

  // Properties
  const finalImage = require(`../assets/images/${imageURL}`);

  // Components
  const Items = bullets.map((item, index) => <li key={index}>{item}</li>);

  return (
    <article className="text-block">
      <img src={finalImage} alt="Simple decorative image" />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
        <ul>{Items}</ul>
      </div>
    </article>
  );
}
