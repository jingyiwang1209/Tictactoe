// Helper function
const generateWinner = (squares)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [p1, p2, p3] = lines[i];
    if (squares[p1] && squares[p1] === squares[p2] && squares[p1] === squares[p3]) {
      return squares[p1];
    }
  }
  return null;
}

export default generateWinner;
