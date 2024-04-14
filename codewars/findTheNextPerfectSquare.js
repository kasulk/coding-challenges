function findNextSquare(square) {
  const squareRoot = Math.sqrt(square);

  if (Number.isInteger(squareRoot)) return (squareRoot + 1) ** 2;

  return -1;
}
