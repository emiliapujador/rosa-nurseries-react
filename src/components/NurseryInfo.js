import "./NurseryInfo.css";
import mapPineLine from "../images/map-pin-line.png";

function NurseryInfo() {
  return (
    <div className="container-footer">
      <div id="opening-hours" className="opening-hours-container">
        <div className="hours-adress-container">
          <span className="opening-hours">Opening Hours</span>
          <div className="container-adress-png">
            <img className="address-logo" src={mapPineLine} />
            <span className="location location-chelsea">Chelsea</span>
          </div>
          <span className="adress adress-chelsea">
            XXX Street, SW10 0BA, London
          </span>
          <a
            className="google-maps-link"
            href="https://www.google.com/maps/place/Chelsea,+London/@51.4876882,-0.1778578,15z/data=!4m5!3m4!1s0x4876056c23490e4f:0x268033680c352ea!8m2!3d51.4869433!4d-0.170036"
            target="_blank"
          >
            <span>Google Maps</span>
          </a>
          <span className="day-hour">Monday - Sunday: 9AM - 4PM</span>
          <span className="day-hour">Sunday Closed</span>
          <div className="container-address-png">
            <img className="address-logo" src={mapPineLine} />
            <span className="location location-islington">Islington</span>
          </div>
          <span className="adress adress-chelsea">
            XXX Street, E8 2BB, London
          </span>
          <a
            className="google-maps-link"
            href="https://www.google.com/maps/place/Islington,+London/@51.5343248,-0.1145155,15z/data=!4m13!1m7!3m6!1s0x48761b6eadb3896d:0x5aa8ffed63aea5ac!2sIslington,+London!3b1!8m2!3d51.538621!4d-0.1028346!3m4!1s0x48761b6eadb3896d:0x5aa8ffed63aea5ac!8m2!3d51.538621!4d-0.1028346"
            target="_blank"
          >
            <span>Google Maps</span>
          </a>
          <span className="day-hour">Monday - Sunday: 9AM - 4PM</span>
          <span className="day-hour sunday-islington">Sunday 10am-1pm</span>
        </div>
      </div>

      <div className="footer-divider"></div>
      {/* -- Contact us -- */}
      <div id="contact-us" className="container-contact">
        <div className="contact-us-container">
          <span className="contact-us">Contact us</span>
          <span className="contact-location contact-location-chelsea">
            Chelsea
          </span>
          <span className="phone-number phone-number-chelsea">
            +44 xxxxxxxxxx
          </span>
          <span className="contact-location contact-location-islington">
            Islington
          </span>
          <span className="phone-number phone-number-islington">
            +44 xxxxxxxxxx
          </span>
        </div>
      </div>
    </div>
  );
}

export default NurseryInfo;
