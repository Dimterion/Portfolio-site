import { useState } from "react";
import "./dupFinder.css";

function DupFinder() {
  const [text, setText] = useState("");
  const [dup, setDup] = useState([]);

  function findDup(text, setDup) {
    const dupArray = text
      .split(" ")
      .filter((item, index) => text.split(" ").indexOf(item) !== index);

    setDup(dupArray);
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
        {dup.map((e) => (
          <li key={dup.indexOf(e)}>{e}</li>
        ))}
      </ul>
    </section>
  );
}

export default DupFinder;
