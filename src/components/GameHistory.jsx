export default function GameHistory({ history, moveTo, currentMove }) {
  return (
    <section className="history-container">
      <ul className="history">
        {history.map((element, idx) => {
          return (
            <li key={idx}>
              <button
                className={`move-btn ${currentMove === idx ? "active" : ""}`}
                onClick={() => moveTo(idx)}
              >
                {idx === 0 ? "Go to game start" : `Go to move #${idx}`}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
