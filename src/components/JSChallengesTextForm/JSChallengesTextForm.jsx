import { useState } from "react";
import { scream, capEveryOtherChar, removeDup } from "../../utils/jschallenges";
import "./jSChallengesTextForm.css";

function JSChallengesTextForm() {
  const [text, setText] = useState("Type something");

  return (
    <div className="jsChallenges-container">
      <h3>Text Edit Form</h3>
      <h4>A simple form to modify text input</h4>
      <form>
        <textarea
          className="jsChallenges-text-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="jsChallenges-buttons-container">
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
              capEveryOtherChar(text, setText);
            }}
          >
            Capitalize every other character
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
  );
}

export default JSChallengesTextForm;
