export default function StatusMessage({ isXNext, winner, gameDraw }) {
  return (
    <section className="status-message">
      {gameDraw ? (
        <>
          <span className="text-orange">O</span> and{" "}
          <span className="text-green">X</span> tied
        </>
      ) : winner ? (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      ) : (
        <>
          Next player is{" "}
          <span className={isXNext ? "text-green" : "text-orange"}>
            {isXNext ? "X" : "O"}
          </span>
        </>
      )}
    </section>
  );
}
