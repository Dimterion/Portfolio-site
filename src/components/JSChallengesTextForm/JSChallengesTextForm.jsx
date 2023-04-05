import { useState } from "react";
import { scream, capEveryOtherChar, removeDup } from "../../utils/jschallenges";
import "./jSChallengesTextForm.css";

function JSChallengesTextForm() {
  const [text, setText] = useState("");

  return (
    <div className="jsChallenges-container">
      <div>
        <h3>Text Edit Form</h3>
        <h4>A form to modify text input</h4>
        <form>
          <textarea
            placeholder="Type something"
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
      </div>
      <a
        className="link"
        href="https://medium.com/@dimterion/practical-usage-of-coding-challenges-4fbbd314311f"
        target="_blank"
        rel="noopener noreferrer"
      >
        Description
      </a>
    </div>
  );
}

export default JSChallengesTextForm;
