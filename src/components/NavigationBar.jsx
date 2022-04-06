// Project files
import Logo from "assets/images/logo-white.png";

export default function NavigationBar({ item }) {
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
        {Links}
      </div>
    </nav>
  );
}
