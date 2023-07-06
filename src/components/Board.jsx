import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [square, setSquare] = useState(new Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false);

  console.log(square);

  function handleClick(squareIndex) {
    if (square[squareIndex]) {
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

  const squareRender = (position) => {
    return (
      <Square
        value={square[position]}
        handleClick={() => handleClick(position)}
      />
    );
  };

  return (
    <section className="board">
      <div className="board-row">
        {squareRender(0)}
        {squareRender(1)}
        {squareRender(2)}
      </div>
      <div className="board-row">
        {squareRender(3)}
        {squareRender(4)}
        {squareRender(5)}
      </div>
      <div className="board-row">
        {squareRender(6)}
        {squareRender(7)}
        {squareRender(8)}
      </div>
    </section>
  );
}
