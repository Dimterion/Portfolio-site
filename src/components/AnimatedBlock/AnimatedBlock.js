import { useState } from "react";
import "./animatedBlock.css";

function AnimatedBlock() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="funFacts-btn" onClick={() => setShow(!show)}>
        {show ? "Close" : "Fun Facts"}
      </button>
      {show && (
        <div className="animatedBlock-container">
          <i>This block is animated to slowly appear after opening.</i>
          <br></br>
          <br></br>
          <i>Avatar at the top left corner is made using CSS.</i>
          <br></br>
          <br></br>
          <i>
            The paragraph with description above is made using{" "}
            <a
              className="link"
              href="https://beta.reactjs.org/learn/passing-data-deeply-with-context"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Context
            </a>
            .
          </i>
          <br></br>
          <br></br>
          <a
            className="link"
            href="https://medium.com/@dimterion"
            target="_blank"
            rel="noopener noreferrer"
          >
            I write stories on Medium every Friday
          </a>
        </div>
      )}
    </>
  );
}

export default AnimatedBlock;
