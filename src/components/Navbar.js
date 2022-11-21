import "./Navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <nav className="navigation-bar">
      <div className="top-bar">
        <Link to="/">
          <img
            id="logo-rosa"
            className="logo"
            src="/Images/Logo/Group 1.png"
            alt="Rosa Nurseries"
          />
        </Link>
      </div>
      <div className="first-line"></div>
      <div className="nav">
        <p className="navigation-line">
          <Link className="navigation-line" to="/about-us">
            ABOUT US
          </Link>
        </p>
        <NavDropdown
          className="dropdown navigation-line"
          title="SHOP ONLINE"
          id="nav-dropdown"
        >
          <NavDropdown.Item eventKey="4.1">
            <Link to="/indoor-plants">Indoor plants</Link>
          </NavDropdown.Item>

          <NavDropdown.Item eventKey="4.2">
            <Link to="/outdoor-plants">Outdoor plants</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <p className="navigation-line">
          <a className="navigation-line" href="/#opening-hours">
            {" "}
            OPENING HOURS
          </a>
        </p>
        <p className="navigation-line">
          <a className="navigation-line" href="/#contact-us">
            {" "}
            CONTACT US
          </a>
        </p>
        <div className="navigation-line">
          <Link to="/sign-in">
            <img
              className="sing-in-icon"
              src="/Images/sing-in-icon.png"
              alt="Sign in icon"
            />
          </Link>
          <Link to="/basket">
            <img className="shop-icon" src="/Images/shop.png" alt="Shop icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
