import { useState } from "react";

import StatusMessage from "./components/StatusMessage";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";

import calculateWinner from "./calculateWinner";
import "./style.scss";

function App() {
  const [square, setSquare] = useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  let winner = calculateWinner(square);
  console.log(winner);

  function handleClick(squareIndex) {
    if (square[squareIndex] || winner) {
      return;
    }

    setSquare(
      square.map((element, idx) => {
        if (idx === squareIndex) {
          return isXNext ? "X" : "O";
        } else {
          return element;
        }
      })
    );

    setIsXNext((prevState) => !prevState);
  }

  return (
    <main className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage isXNext={isXNext} winner={winner} />
      <Board square={square} handleClick={handleClick} />
      <button className="btn-reset">Start new game</button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <GameHistory />
    </main>
  );
}

export default App;
