import { useState } from "react";
import { Link } from "react-router-dom";
import {
  scream,
  noScream,
  whisper,
  noWhisper,
  fun,
  removeDup,
} from "../../utils/jschallenges";
import "./jsChallenges.css";

function JsChallenges() {
  const [screamArray, setScreamArray] = useState("I am here to scream");
  const [whisperArray, setWhisperArray] = useState("I AM HERE TO WHISPER!");
  const [text, setText] = useState("Type something.");

  return (
    <>
      <div className="jsChallenges-container">
        <h2>Work In Progress</h2>
        <h3>Here I test the usage of various coding challenges</h3>
        <h4>JS split(), join(), includes(), toUpperCase()</h4>
        <p>{screamArray}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            scream(screamArray, setScreamArray);
          }}
        >
          Scream
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            noScream(setScreamArray);
          }}
        >
          Don't scream
        </button>
        <br></br>
        <h4>JS endsWith(), slice(), toLowerCase()</h4>
        <p>{whisperArray}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            whisper(whisperArray, setWhisperArray);
          }}
        >
          Whisper
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            noWhisper(setWhisperArray);
          }}
        >
          Don't whisper
        </button>
        <p className="jsChallenges-text-field">{text}</p>
        <form>
          <label>
            <input
              className="jsChallenges-text-input"
              size={50}
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
                fun(text, setText);
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
                removeDup(text, setText);
              }}
            >
              Remove duplicate characters
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scream(text, setText);
              }}
            >
              Scream
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
