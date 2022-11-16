import "./InfoHero.css";

function InfoHero() {
  return (
    <div>
      <div className="title">
        <h1 className="title-text">Buy online or visit our London nurseries</h1>
      </div>
      <div className="container-main">
        <img
          className="main-image-1"
          src="./Images/image-1-main.jpeg"
          alt="Main image 1"
        />
        <img
          className="main-image-2"
          src="./Images/image-2-main.jpeg"
          alt="Main image 2"
        />
      </div>
      <div className="second-line"></div>
    </div>
  );
}

export default InfoHero;
