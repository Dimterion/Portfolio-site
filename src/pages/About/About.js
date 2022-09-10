import image from "../../assets/image_park.jpg";
import "./about.css";

function About() {
  return (
    <div className="aboutPage-container">
      <img className="aboutPage-image" src={image} alt="Park in Paris" />
      <h2>Hi! I'm Dmitrii</h2>
      <p>
        I live in France and learn Web Development focusing on Front-End (with
        some bits of Back-End).
      </p>
      <p>
        This small site was made in order to learn React using its oficial
        documentation. I'm mostly focusing on testing some of the techniques
        rather than making everything ideal.
      </p>
      <h3>Contact links</h3>
      <ul className="aboutPage-list">
        <li>
          <a
            className="link"
            href="https://github.com/Dimterion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here is my GitHub profile
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://twitter.com/Dimterion"
            target="_blank"
            rel="noopener noreferrer"
          >
            And this is my Twitter
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://medium.com/@dimterion"
            target="_blank"
            rel="noopener noreferrer"
          >
            I also write stories on Medium every Friday
          </a>
        </li>
      </ul>
      <i>Fan fact: avatar at the top left corner was made using CSS</i>
    </div>
  );
}

export default About;
