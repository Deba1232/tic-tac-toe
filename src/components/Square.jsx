export default function Square({ value, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      <span className={value === "X" ? "text-green" : "text-orange"}>
        {value}
      </span>
    </button>
  );
}
