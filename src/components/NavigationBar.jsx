// Project files
import Logo from "assets/images/logo-white.png";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      {/* Logo */}
      <div className="container">
        <a href="#">
          <img src={Logo} alt="Novare logo with a handwritting overlay" />
        </a>
        <span className="spacer">{/* empty on purpose */}</span>
        <a href="https://frontend-course.novare.se" target="_blank">
          Discover the course
        </a>
        <a href="https://novare.se/potential" target="_blank">
          About us
        </a>
      </div>
    </nav>
  );
}
