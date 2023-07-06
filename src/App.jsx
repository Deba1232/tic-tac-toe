import StatusMessage from "./components/StatusMessage";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";

import "./style.scss";

function App() {
  return (
    <main className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage />
      <Board />
      <button className="btn-reset">Start new game</button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <GameHistory />
    </main>
  );
}

export default App;
