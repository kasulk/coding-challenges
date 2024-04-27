function divisors(num) {
  const divisors = [];

  for (let divisor = 2; divisor <= num / 2; divisor++) {
    if (num % divisor === 0) divisors.push(divisor);
  }

  return divisors.length ? divisors : `${num} is prime`;
}
