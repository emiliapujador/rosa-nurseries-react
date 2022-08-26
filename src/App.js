import logo from "./logo.svg";
import "./App.css";
import "./Navbar.css";
import "./Footer.css";
import "./InfoHero.css";
import "./IndoorSection.css";

function App() {
  return (
    <div>
      <Navbar />
      <InfoHero />
      <IndoorSection />
      <Footer />
    </div>
  );
}

export default App;

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

function Footer() {
  return (
    <footer>
      {/* -- Opening hours -- */}
      <div class="container-footer">
        <div id="opening-hours" class="opening-hours-container">
          <div class="hours-adress-container">
            <span class="opening-hours">Opening Hours</span>
            <span class="location location-chelsea">Chelsea</span>
            <span class="adress adress-chelsea">
              XXX Street, SW10 0BA, London
            </span>
            <a
              class="google-maps-link"
              href="https://www.google.com/maps/place/Chelsea,+London/@51.4876882,-0.1778578,15z/data=!4m5!3m4!1s0x4876056c23490e4f:0x268033680c352ea!8m2!3d51.4869433!4d-0.170036"
              target="_blank"
            >
              <span>Google Maps</span>
            </a>
            <span class="day-hour">Monday to Thursday 10am-5pm</span>
            <span class="day-hour">Friday 10am-6pm</span>
            <span class="day-hour">Saturday 10am-7pm</span>
            <span class="day-hour">Sunday Closed</span>
            <span class="location location-islington">Islington</span>
            <span class="adress adress-chelsea">
              XXX Street, E8 2BB, London
            </span>
            <a
              class="google-maps-link"
              href="https://www.google.com/maps/place/Islington,+London/@51.5343248,-0.1145155,15z/data=!4m13!1m7!3m6!1s0x48761b6eadb3896d:0x5aa8ffed63aea5ac!2sIslington,+London!3b1!8m2!3d51.538621!4d-0.1028346!3m4!1s0x48761b6eadb3896d:0x5aa8ffed63aea5ac!8m2!3d51.538621!4d-0.1028346"
              target="_blank"
            >
              <span>Google Maps</span>
            </a>
            <span class="day-hour">Monday to Thursday 10am-5pm</span>
            <span class="day-hour">Friday 10am-6pm</span>
            <span class="day-hour">Saturday 10am-7pm</span>
            <span class="day-hour sunday-islington">Sunday 10am-1pm</span>
          </div>
        </div>

        <div class="footer-divider"></div>
        {/* -- Contact us -- */}
        <div id="contact-us" class="container-contact">
          <div class="contact-us-container">
            <span class="contact-us">Contact us</span>
            <span class="contact-location contact-location-chelsea">
              Chelsea
            </span>
            <span class="phone-number phone-number-chelsea">
              +44 xxxxxxxxxx
            </span>
            <span class="contact-location contact-location-islington">
              Islington
            </span>
            <span class="phone-number phone-number-islington">
              +44 xxxxxxxxxx
            </span>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <span class="intellectual-property">
          © 2022 <a href="/#logo-rosa"> ROSA NURSERIES</a>{" "}
        </span>
      </div>
    </footer>
  );
}

function InfoHero() {
  return (
    <div>
      <div class="title">
        <h1 class="title-text">Buy online or visit our London nurseries</h1>
      </div>
      <div class="container-main">
        <img
          class="main-image-1"
          src="./Images/image-1-main.jpeg"
          alt="Main image 1"
        />
        <img
          class="main-image-2"
          src="./Images/image-2-main.jpeg"
          alt="Main image 2"
        />
      </div>
      <div class="second-line"></div>
    </div>
  );
}

function IndoorSection() {
  return (
    <div>
      <div class="plants-section">
        <div class="indoor-column">
          <div class="title-container">
            <h2 class="indoor-plants-title">
              Indoor plants
              <br />
              available online
            </h2>
          </div>
          <a href="./maranta.html">
            <div class="border-plants">
              <img
                class="indoor-image"
                src="./Images/indoorPlant-1.jpeg "
                alt="Indoor Plant n1"
              />
              <div class="text-plants">
                <p class="name-plant">Maranta leuconeura</p>
                <p class="price-plant">£9.00</p>
              </div>
            </div>
          </a>
          <a
            href="./Epipremnum-pinnatum.html
          "
          >
            <div class="border-plants border-plants-margin">
              <img
                class="indoor-image"
                src="/Images/indoorPlant-2.jpeg"
                alt="Indoor Plant n2"
              />
              <div class="text-plants">
                <p class="name-plant">Epipremnum pinnatum</p>
                <p class="price-plant">£8.50</p>
              </div>
            </div>
          </a>
        </div>
        <div class="indoor-column">
          <div class="title-container title-container-center">
            <h2 class="plants-characteristics">
              Different shapes and sizes to light
              <br />
              up every corner of your home
            </h2>
          </div>
          <a href="./Epipremnum-aureum-Neon.html">
            <div class="border-plants">
              <img
                class="indoor-image"
                src="./Images/indoorPlant-3.jpeg "
                alt="Indoor Plant n3"
              />
              <div class="text-plants">
                <p class="name-plant">Epipremnum aureum 'Neon'</p>
                <p class="price-plant">£8.00</p>
              </div>
            </div>
          </a>
          <a href="./Monstera-adansonii.html">
            <div class="border-plants border-plants-margin">
              <img
                class="indoor-image"
                src="/Images/indoorPlant-4.jpeg"
                alt="Indoor Plant n4"
              />
              <div class="text-plants">
                <p class="name-plant">Monstera adansonii</p>
                <p class="price-plant">£11.00</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a href="./indoor-plant.html" target="_blank">
        <div class="button-view-more">
          <span>VIEW MORE</span>
        </div>
      </a>
    </div>
  );
}
