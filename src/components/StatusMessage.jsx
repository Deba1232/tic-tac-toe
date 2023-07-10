export default function StatusMessage({ isXNext, winner }) {
  return (
    <section className="status-message">
      {winner ? (
        `Winner is ${winner}`
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
