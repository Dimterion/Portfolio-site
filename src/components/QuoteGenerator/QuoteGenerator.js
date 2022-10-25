import axios from "axios";
import { useState } from "react";

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
    <div>
      <button onClick={getQuote}>Get a Quote</button>
      {quote && <p>{quote}</p>}
      {author && <p>{author}</p>}
    </div>
  );
}

export default QuoteGenerator;
