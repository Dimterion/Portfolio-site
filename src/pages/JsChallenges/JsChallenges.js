import { useState } from "react";
import { Link } from "react-router-dom";
import "./jsChallenges.css";

function JsChallenges() {
  const [screamArray, setScreamArray] = useState("I am here to scream");
  const [whisperArray, setWhisperArray] = useState("I AM HERE TO WHISPER!");
  const [text, setText] = useState("Type something.");

  function scream() {
    const screamCheck = !screamArray.includes("😱");

    screamCheck &&
      setScreamArray(screamArray.split(" ").join(" 😱 ").toUpperCase() + "!");
  }

  function noScream() {
    setScreamArray("I am here to scream");
  }

  function whisper() {
    whisperArray.endsWith("!") &&
      setWhisperArray(whisperArray.slice(0, -1).toLowerCase());
  }

  function noWhisper() {
    setWhisperArray("I AM HERE TO WHISPER!");
  }

  function fun() {
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i];
      }
    }

    setText(newText);
  }

  function removeDup() {
    let newText = text.split("");
    newText = newText.filter((e, i) => {
      return newText.indexOf(e) === i;
    });

    setText(newText.join(""));
  }

  return (
    <>
      <div className="jsChallenges-container">
        <h2>Work In Progress</h2>
        <h3>Here I test the usage of various coding challenges</h3>
        <h4>JS split(), join(), includes(), toUpperCase()</h4>
        <p>{screamArray}</p>
        <button onClick={scream}>Scream</button>
        <button onClick={noScream}>Don't scream</button>
        <br></br>
        <h4>JS endsWith(), slice(), toLowerCase()</h4>
        <p>{whisperArray}</p>
        <button onClick={whisper}>Whisper</button>
        <button onClick={noWhisper}>Don't whisper</button>
        <p>{text}</p>
        <form>
          <label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </label>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                fun();
              }}
            >
              Capitalize every other character
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setText(text.toUpperCase());
              }}
            >
              Uppercase
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setText(text.toLowerCase());
              }}
            >
              Lowercase
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeDup();
              }}
            >
              Remove duplicate characters
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setText("");
              }}
            >
              Clear text
            </button>
          </div>
        </form>
        <br></br>
        <br></br>
      </div>
      <Link className="link other-link" to="/other">
        Previous page
      </Link>
    </>
  );
}

export default JsChallenges;
