import { useState } from "react";

import StatusMessage from "./components/StatusMessage";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";

import calculateWinner from "./calculateWinner";
import "./style.scss";

function App() {
  const [history, setHistory] = useState([
    {
      square: new Array(9).fill(null),
      isXNext: false,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentGamingBoard = history[currentMove];

  let square = currentGamingBoard.square;
  let isXNext = currentGamingBoard.isXNext;

  let winner = calculateWinner(square);
  let gameDraw = false;
  let countO = 0;
  let countX = 0;

  for (let i = 0; i < square.length; i++) {
    if (square[i] === "O") {
      countO++;
    } else if (square[i] === "X") {
      countX++;
    } else {
      continue;
    }
  }

  if ((countO === 5 || countX === 5) && winner === null) {
    gameDraw = true;
  }

  function handleClick(squareIndex) {
    if (square[squareIndex] || winner) {
      return;
    }

    setHistory((prevState) => {
      return [
        ...prevState,
        {
          square: square.map((element, idx) => {
            if (idx === squareIndex) {
              return isXNext ? "X" : "O";
            } else {
              return element;
            }
          }),
          isXNext: !isXNext,
        },
      ];
    });

    setCurrentMove((prevState) => prevState + 1);
  }

  console.log(history);

  return (
    <main className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage isXNext={isXNext} winner={winner} gameDraw={gameDraw} />
      <Board square={square} handleClick={handleClick} />
      <button className="btn-reset">Start new game</button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <GameHistory />
    </main>
  );
}

export default App;
