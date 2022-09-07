import image from "../../assets/image_sea.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <img className="image-container" src={image} alt="Sea" />
    </div>
  );
}

export default Home;
