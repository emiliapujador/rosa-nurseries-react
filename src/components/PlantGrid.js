import "./PlantGrid.css";
import PlantCard from "./PlantCard";

function PlantGrid() {
  return (
    <div className="plants-section">
      <div className="indoor-column">
        <PlantCard
          name="Maranta leuconeura"
          price="£9.00"
          image="/Images/indoorPlant-1.jpeg"
          alt="Indoor image 1"
          slug="maranta"
        />
        <PlantCard
          name="Epipremnum aureum 'Neon'"
          price="£8.50"
          image="./Images/indoorPlant-2.jpeg"
          alt="Indoor image 2"
          slug="epipremnum_aureum"
        />
      </div>
      <div className="indoor-column">
        <PlantCard
          name="Epipremnum pinnatum"
          price="£8.00"
          image="./Images/indoorPlant-3.jpeg"
          alt="Indoor image 3"
          slug="epipremnum_pinnatum"
        />
        <PlantCard
          name="Monstera adansonii"
          price="11.00"
          image="./Images/indoorPlant-4.jpeg"
          alt="Indoor image 4"
          slug="monstera"
        />
      </div>
    </div>
  );
}

export default PlantGrid;
