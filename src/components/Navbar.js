import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <li className="navigation-line">
          <a
            className="dropdown"
            href="#"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SHOP ONLINE
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="./indoor-plant.html">
                Indoor plants
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./outdoor-plants.html">
                Outdoor plants
              </a>
            </li>
          </ul>
        </li>
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
