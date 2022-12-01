import "./Navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menuOpen);
  };

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
      <div className="nav-mobile">
        <div className="nav-mobile-row">
          <img
            className="nav-png-menu"
            onClick={toggle}
            src="/Images/icon-menu.png"
            alt="menu png"
          ></img>
          <div className="menu-shop-sing-in-icon">
            <Link to="/sign-in">
              <img
                className="sing-in-icon"
                src="/Images/sing-in-icon.png"
                alt="Sign in icon"
              />
            </Link>
            <Link to="/basket">
              <img
                className="shop-icon"
                src="/Images/shop.png"
                alt="Shop icon"
              />
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu-open">
            <p className="navigation-line">
              <Link className="navigation-line" to="/about-us">
                ABOUT US
              </Link>
            </p>

            <p className="navigation-line">
              <Link to="/indoor-plants">INDOOR PLANTS</Link>
            </p>

            <p className="navigation-line">
              <Link to="/outdoor-plants">OUTDOOR PLANTS</Link>
            </p>

            <p className="navigation-line">
              <Link className="navigation-line" to="/#opening-hours">
                OPENING HOURS
              </Link>
            </p>
            <p className="navigation-line">
              <a className="navigation-line" href="/#contact-us">
                CONTACT US
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="nav-desktop">
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
