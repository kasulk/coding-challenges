function findNextSquare(square) {
  const squareRoot = Math.sqrt(square);

  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : -1;
}
