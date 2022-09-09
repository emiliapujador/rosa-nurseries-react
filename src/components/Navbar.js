import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navigation-bar">
      <div class="top-bar">
        <a href="/">
          <img
            id="logo-rosa"
            class="logo"
            src="./Images/Logo/Group 1.png"
            alt="Rosa Nurseries"
          />
        </a>
      </div>
      <div class="first-line"></div>
      <div class="nav">
        <p class="navigation-line">
          <a class="navigation-line" href="about-us.html">
            ABOUT US
          </a>
        </p>
        <li class="navigation-line">
          <a
            class="dropdown"
            href="#"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SHOP ONLINE
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="./indoor-plant.html">
                Indoor plants
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="./outdoor-plants.html">
                Outdoor plants
              </a>
            </li>
          </ul>
        </li>
        <p class="navigation-line">
          <a class="navigation-line" href="/#opening-hours">
            {" "}
            OPENING HOURS
          </a>
        </p>
        <p class="navigation-line">
          <a class="navigation-line" href="/#contact-us">
            {" "}
            CONTACT US
          </a>
        </p>
        <div class="navigation-line">
          <a href="./signin.html">
            <img
              class="sing-in-icon"
              src="./Images/sing-in-icon.png"
              alt="Sign in icon"
            />
          </a>
          <a href="./basket.html">
            <img class="shop-icon" src="./Images/shop.png" alt="Shop icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
