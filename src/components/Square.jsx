export default function Square({ value, winningSquares, handleClick }) {
  return (
    <button
      className={`square ${value === "X" ? "text-green" : "text-orange"} ${
        winningSquares ? "winner" : ""
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
