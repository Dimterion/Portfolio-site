import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TenzieElement from "../../components/TenzieElement/TenzieElement";
import { nanoid } from "nanoid";
import "./tenzies.css";

function TenziesGame() {
  const [start, setStart] = useState(false);
  const [tenzies, setTenzies] = useState(allNewTenzies());
  const [gameState, setGameState] = useState(false);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("results")) || []
  );
  const [disableSaveBtn, setDisableSaveBtn] = useState(false);
  const [rewardImg, setRewardImg] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const allHeld = tenzies.every((tenzie) => tenzie.isHeld);
    const firstValue = tenzies[0].value;
    const allSameValue = tenzies.every((tenzie) => tenzie.value === firstValue);

    if (allHeld && allSameValue) {
      setGameState(true);
      clearInterval(intervalId);
    }

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRewardImg(data));

    if (timer > 600) {
      setGameState(false);
      setCount(0);
      setStart(false);
      clearInterval(intervalId);
      setTimer(0);
    }

    localStorage.setItem("results", JSON.stringify(results));
  }, [tenzies, intervalId, timer, results]);

  function startGame() {
    setStart(true);
    const id = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIntervalId(id);
    setUrl(rewardImg.message);
  }

  function generateNewTenzie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewTenzies() {
    const tenziesArray = [];
    for (let i = 0; i < 10; i++) {
      tenziesArray.push(generateNewTenzie());
    }
    return tenziesArray;
  }

  const finalArray = tenzies.map((tenzie) => {
    return (
      <TenzieElement
        key={tenzie.id}
        value={start ? tenzie.value : 0}
        isHeld={tenzie.isHeld}
        holdTenzie={start ? () => holdTenzie(tenzie.id) : () => null}
      />
    );
  });

  function holdTenzie(id) {
    setTenzies((prevTenzie) =>
      prevTenzie.map((tenzie) => {
        return tenzie.id === id
          ? { ...tenzie, isHeld: !tenzie.isHeld }
          : tenzie;
      })
    );
  }

  function roll() {
    if (!gameState) {
      setTenzies((prevTenzie) =>
        prevTenzie.map((tenzie) => {
          return tenzie.isHeld ? tenzie : generateNewTenzie();
        })
      );
      setCount((prevCount) => {
        return (prevCount = prevCount + 1);
      });
    } else {
      setGameState(false);
      setTenzies(allNewTenzies());
      setCount(0);
      setStart(false);
      clearInterval(intervalId);
      setTimer(0);
      setDisableSaveBtn(false);
    }
  }

  function saveResults() {
    const newResult = {
      id: nanoid(),
      count: count,
      timer: timer,
    };

    if (results.length > 4) {
      results.pop();
    }

    setResults((prevResults) => [newResult, ...prevResults]);

    setDisableSaveBtn(true);
  }

  function clearResults() {
    localStorage.clear();
    setResults([{ count: "", timer: "" }]);
    setDisableSaveBtn(false);
  }

  const resultsToDisplay = results.map(
    (result) =>
      result.count !== "" && (
        <li key={nanoid()}>
          <b>Rolls: </b>
          {result.count}
          <br></br>
          <b>Time: </b>
          {result.timer}s.
        </li>
      )
  );

  return (
    <>
      <section className="tenzies-section page-loading">
        <h1 className="game-title">Dice Game</h1>
        <div className="game-instructions">
          Roll until all dice are the same.<br></br>Click each dice to freeze
          it.<br></br>Click Start to begin.
          <div className="stats-container">
            <b>Rolls: </b>
            {count}
            <br></br>
            <b>Time: </b>
            {timer}s.
          </div>
          <br></br>
        </div>
        <div className="tenziesElements-container">{finalArray}</div>
        <br></br>
        {start ? (
          <button onClick={roll} className="rollDice-btn">
            {gameState ? "New Game" : "Roll"}
          </button>
        ) : (
          <button onClick={startGame} className="rollDice-btn">
            Start
          </button>
        )}
        {gameState && (
          <div className="tenzies-completion-container">
            <b>Yay! You've completed the game! Congratulations!</b>
            <br></br>
            <br></br>
            <img src={url} alt="Random dog" className="reward-img" />
            <br></br>
            <br></br>
            <p>
              You can save your results (rolls and time) to the local storage of
              your browser.<br></br>Last five saved results will be displayed
              below (starting from the latest).
            </p>
            <button
              disabled={disableSaveBtn}
              onClick={saveResults}
              className="rollDice-btn"
            >
              Save
            </button>
          </div>
        )}
        <h3>Previous results</h3>
        <small>(starting from the latest one)</small>
        {<ol className="tenzies-results-container">{resultsToDisplay}</ol>}
        {resultsToDisplay[0] !== false && resultsToDisplay[0] !== undefined ? (
          <button onClick={clearResults} className="rollDice-btn">
            Clear
          </button>
        ) : (
          <small>Nothing has been saved so far</small>
        )}
        <div className="tenzies-links">
          <Link className="link other-link" to="/projects">
            Other projects
          </Link>
          <a
            className="link other-link"
            href="https://medium.com/@dimterion/dice-game-in-react-de4019e69354"
            target="_blank"
            rel="noopener noreferrer"
          >
            Additional info
          </a>
        </div>
      </section>
    </>
  );
}

export default TenziesGame;
