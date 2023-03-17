import { useState } from "react";
import "./dupFinder.css";

function DupFinder() {
  // Text to check for duplicate words
  const [text, setText] = useState("");

  // Array with duplicate words to display
  const [dup, setDup] = useState([]);

  function findDup(text, setDup) {
    // Removing all punctuation from the text
    const textWithNoPunctuation = text
      .replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ");

    // Setting each text word to lower case and splitting the text to get an array of words
    const words = textWithNoPunctuation.toLowerCase().split(" ");

    // Object to store duplicate words and their count
    const dups = {};

    // Checking for whitespaces and adding each word and its count into the dups object
    words.forEach((word) => {
      word !== "" && (dups[word] = (dups[word] || 0) + 1);
    });

    // Final array for duplicates and their count
    let wordsCount = [];

    // Pushing all duplicates into the array
    for (const word in dups) {
      dups[word] > 1 && wordsCount.push(`${word}: ${dups[word]}`);
    }

    // Setting the array with duplicates to display on the page
    setDup(wordsCount);
  }

  return (
    <section className="dupFinder-container">
      <h2>Duplicates Finder</h2>
      <p>Find duplicate words in your text</p>
      <form>
        <textarea
          placeholder="Type here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            findDup(text, setDup);
          }}
        >
          Submit
        </button>
      </form>
      <ul>
        {/* Mapping through the duplicates array to display the words from it and their count */}
        {dup.map((word) => (
          <li key={`${word}-${dup.indexOf(word)}`}>{word}</li>
        ))}
      </ul>
    </section>
  );
}

export default DupFinder;
