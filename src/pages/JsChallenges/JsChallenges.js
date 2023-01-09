import { useState } from "react";
import "./jsChallenges.css";

function JsChallenges() {
  const [screamArray, setScreamArray] = useState("I am here to scream");
  const [whisperArray, setWhisperArray] = useState("I AM HERE TO WHISPER!");
  const [text, setText] = useState("Change me!");

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

  return (
    <div>
      <h2>Work in progress</h2>
      <h3>
        Here I'm testing the usage of various JavaScript coding challenges.
      </h3>
      <p>{screamArray}</p>
      <button onClick={scream}>Scream</button>
      <button onClick={noScream}>Don't scream</button>
      <br></br>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            fun();
          }}
        >
          Have some fun
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setText("All clear!");
          }}
        >
          Clear text
        </button>
      </form>
    </div>
  );
}

export default JsChallenges;
