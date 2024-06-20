function isPrime(num) {
  if (num <= 1) return false;

  for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
    if (num % divisor === 0) return false;
  }

  return true;
}
