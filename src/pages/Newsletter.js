import "./Newsletter.css";

function Newsletter() {
  return (
    <div>
      <div className="newsletter-section">
        <div className="newsletter-title-information">
          <p className="newsletter-title">SIGN UP TO OUR NEWSLETTER</p>
          <p className="newsletter-info">
            Exclusive online and in-store discounts directly to your email
          </p>
        </div>
        <div className="email-suscribe-button">
          <form name="newsletter" netlify>
            <input
              className="suscribe-input"
              type="email"
              placeholder="Email adress"
              name="email"
            />
            <br />
            <button className="suscribe-button" type="submit">
              SUSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
