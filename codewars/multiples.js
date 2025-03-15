function multiple(num) {
  if (num % 15 === 0) return "BangBoom";
  if (num % 5 === 0) return "Boom";
  if (num % 3 === 0) return "Bang";
  return "Miss";
}
