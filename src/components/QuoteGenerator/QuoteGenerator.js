import axios from "axios";
import { useState } from "react";
import "./quoteGenerator.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        // console.log(res);
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="quoteGenerator-container">
      <h2>Here is a simple generator that uses API to get a random quote.</h2>
      <button onClick={getQuote}>Get a quote</button>
      <div>
        {quote && <p className="quoteGenerator-text">{quote}</p>}
        {author && (
          <p className="quoteGenerator-author">
            <b>{author}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default QuoteGenerator;
