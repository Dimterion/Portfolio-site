import axios from "axios";
import { useState } from "react";
import "./quoteGenerator.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [buttonName, setButtonName] = useState("Get a Quote");

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

    setButtonName("Get a New Quote");
  };

  return (
    <div className="quoteGenerator-container">
      <h2>Quotes Generator</h2>
      <p>A simple generator that makes an API call to get a random quote.</p>
      <button onClick={getQuote}>{buttonName}</button>
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
