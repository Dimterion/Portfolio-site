import { useState } from "react";
import "./animatedBlock.css";

function AnimatedBlock() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="funFacts-btn" onClick={() => setShow(!show)}>
        {show ? "Close" : "Fun facts"}
      </button>
      {show && (
        <div className="animatedBlock-container">
          <i>Avatar at the top left corner was made using CSS.</i>
          <br></br>
          <br></br>
          <i>
            The paragraph with description above was made using{" "}
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
        </div>
      )}
    </>
  );
}

export default AnimatedBlock;
