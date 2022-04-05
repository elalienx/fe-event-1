// Project files
import Logo from "assets/images/logo-white.png";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      {/* Logo */}
      <div className="container">
        <img src={Logo} alt="Novare logo with a handwritting overlay" />
        <span className="spacer">{/* empty on purpose */}</span>
        <a href="https://frontend-course.novare.se" target="_blank">
          Läs mer om vår utbildning
        </a>
        <a href="https://novare.se/potential" target="_blank">
          Läs mer om oss
        </a>
        <a
          href="https://www.eventbrite.com/e/find-your-next-developer-registration-306425897107"
          target="_blank"
        >
          Anmäl dig
        </a>
      </div>
    </nav>
  );
}
