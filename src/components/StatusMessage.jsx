export default function StatusMessage({ isXNext, winner }) {
  return (
    <section className="status-message">
      {winner ? (
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
