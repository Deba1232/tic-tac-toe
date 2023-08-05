import Square from "./Square";

export default function Board({ square, winnerIndices, handleClick }) {
  const squareRender = (position) => {
    const winningSquares = winnerIndices.includes(position);

    return (
      <Square
        value={square[position]}
        winningSquares={winningSquares}
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
