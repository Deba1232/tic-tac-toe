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
  
  let winningPlayer = null;
  let winningIndices = [];

  lines.map((line) => {
    const [a, b, c] = line;

    if (square[a] && (square[a] === square[b] && square[a] === square[c])) {
      winningPlayer = square[a];
      winningIndices.push(a,b,c);
    }
  });

  return [winningPlayer,winningIndices];
}
