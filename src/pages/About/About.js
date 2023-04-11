import Introduction from "../../components/Introduction/Introduction";
import AnimatedBlock from "../../components/AnimatedBlock/AnimatedBlock";
import image from "../../assets/image_park.jpg";
import "./about.css";

function About() {
  return (
    <div className="aboutPage-container page-loading">
      <img className="aboutPage-image" src={image} alt="Park in Paris" />
      <Introduction />
      <AnimatedBlock />
    </div>
  );
}

export default About;
