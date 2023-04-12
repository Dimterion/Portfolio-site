import { useState, useEffect } from "react";
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

  useEffect(() => {
    const allHeld = tenzies.every((tenzie) => tenzie.isHeld);
    const firstValue = tenzies[0].value;
    const allSameValue = tenzies.every((tenzie) => tenzie.value === firstValue);

    if (allHeld && allSameValue) {
      setGameState(true);
      clearInterval(intervalId);
    }

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
        value={start ? tenzie.value : ""}
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
  }

  function clearResults() {
    localStorage.clear();
    setResults([{ count: "", timer: "" }]);
  }

  const resultsToDisplay = results.map(
    (result) =>
      result.count !== "" && (
        <li key={nanoid()}>
          <b>Number of rolls:</b>
          {result.count}
          <br></br>
          <b>Time:</b>
          {result.timer}
        </li>
      )
  );

  return (
    <section className="tenzies-section page-loading">
      <h1 className="game-title">Tenzies</h1>
      <div className="game-instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
        <br></br>
        <br></br>
        <div>
          <b>Number of rolls:</b> {count}
          <br></br>
          <br></br>
          <b>Timer:</b> {timer}
        </div>
      </div>
      <div className="tenziesElements-container">{finalArray}</div>
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
          <p>
            Yay! You've completed the game. You can save your results (number of
            rolls and time) to the local storage of your current browser. Five
            last saved results will be displayed on the page (first one is the
            latest).
          </p>
          <button onClick={saveResults} className="rollDice-btn">
            Save
          </button>
        </div>
      )}
      {<ol>{resultsToDisplay}</ol>}
      {resultsToDisplay[0] !== false && resultsToDisplay[0] !== undefined && (
        <button onClick={clearResults} className="rollDice-btn">
          Clear
        </button>
      )}
    </section>
  );
}

export default TenziesGame;