import "./Footer.css";

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

export default Footer;
