import Introduction from "../../components/Introduction/Introduction";
import image from "../../assets/image_park.jpg";
import "./about.css";

function About() {
  return (
    <div className="aboutPage-container">
      <img className="aboutPage-image" src={image} alt="Park in Paris" />
      <Introduction />
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
      <i>Fun fact: avatar at the top left corner was made using CSS</i>
      <br></br>
      <br></br>
      <i>
        Another fun fact: the paragraph with description above was made using{" "}
        <a
          className="link"
          href="https://beta.reactjs.org/learn/passing-data-deeply-with-context"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Context
        </a>
      </i>
    </div>
  );
}

export default About;
