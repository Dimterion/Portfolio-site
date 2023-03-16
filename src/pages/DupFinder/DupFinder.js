import { useState } from "react";
import "./dupFinder.css";

function DupFinder() {
  const [text, setText] = useState("");
  const [dup, setDup] = useState([]);

  function findDup(text, setDup) {
    let words = text.toLowerCase().split(" ");

    const dups = {};

    words.forEach((word) => {
      dups[word] = (dups[word] || 0) + 1;
    });

    let wordsCount = [];

    for (const word in dups) {
      word !== "" &&
        dups[word] > 1 &&
        wordsCount.push(`${word}: ${dups[word]}`);
    }

    setDup(wordsCount);
  }

  return (
    <section className="dupFinder-container">
      <h2>Duplicates Finder</h2>
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
        {dup.map((word) => (
          <li key={`${word}-${dup.indexOf(word)}`}>{word}</li>
        ))}
      </ul>
    </section>
  );
}

export default DupFinder;
