export default function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  let winner;

  lines.map((line) => {
    const [a, b, c] = line;

    if (square[a] && (square[a] === square[b] && square[a] === square[c])) {
      winner = square[a];
    }
  });

  return winner;
}