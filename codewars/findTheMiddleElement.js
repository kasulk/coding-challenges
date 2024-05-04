function gimme(triplet) {
  const middle = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(middle);
}
