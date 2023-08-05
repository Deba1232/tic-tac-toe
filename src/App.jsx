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

  let [winner, winnerIndices] = calculateWinner(square);
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

    setHistory((prevBoardState) => {
      const isTraversingPrevMoves = currentMove + 1 != prevBoardState.length;

      const prevMoves = isTraversingPrevMoves
        ? prevBoardState[currentMove]
        : prevBoardState[prevBoardState.length - 1];

      const nextMove = prevMoves.square.map((element, index) => {
        if (index === squareIndex) {
          return isXNext ? "X" : "O";
        } else {
          return element;
        }
      });

      const currentBoardState = isTraversingPrevMoves
        ? prevBoardState.slice(0, prevBoardState.indexOf(prevMoves) + 1)
        : prevBoardState;

      return currentBoardState.concat({
        square: nextMove,
        isXNext: !prevMoves.isXNext,
      });
    });

    setCurrentMove((prevBoardState) => prevBoardState + 1);
  }

  function moveTo(move) {
    setCurrentMove(move);
  }

  return (
    <main className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage isXNext={isXNext} winner={winner} gameDraw={gameDraw} />
      <Board
        square={square}
        winnerIndices={winnerIndices}
        handleClick={handleClick}
      />
      <button
        className={`btn-reset ${winner || gameDraw ? "active" : ""}`}
        onClick={() => {
          setHistory([
            {
              square: new Array(9).fill(null),
              isXNext: false,
            },
          ]);
          setCurrentMove(0);
        }}
      >
        Start new game
      </button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <GameHistory
        history={history}
        moveTo={moveTo}
        currentMove={currentMove}
      />
    </main>
  );
}

export default App;
