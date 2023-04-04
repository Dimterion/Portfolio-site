import fetchImg from "../../assets/fetch.png";
import axiosImg from "../../assets/axios.png";
import "./apiInfo.css";

function ApiInfo() {
  return (
    <div className="apiInfo-container">
      <h3>API Requests</h3>
      <p>
        To make an API request you can use{" "}
        <a
          className="link"
          href="https://axios-http.com/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Axios
        </a>{" "}
        or{" "}
        <a
          className="link"
          href="https://developer.mozilla.org/docs/Web/API/Fetch_API"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fetch
        </a>
        .
      </p>
      <details>
        <summary>Code examples</summary>
        <img
          className="apiInfo-img"
          src={fetchImg}
          alt="Basic Fetch code example"
        />
        <img
          className="apiInfo-img"
          src={axiosImg}
          alt="Basic Axios code example"
        />
      </details>
      <a
        className="link"
        href="https://twitter.com/Rapid_API/status/1516130975750762501"
        target="_blank"
        rel="noopener noreferrer"
      >
        Useful Twitter-thread
      </a>
    </div>
  );
}

export default ApiInfo;
