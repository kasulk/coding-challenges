function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

function amIWilson(number) {
  console.log("---------------");
  console.log(number, isPrime(number));

  if (!isPrime(number)) return false;
  console.log("factorial:", factorial(number));

  console.log(((factorial(number - 1) + 1) / (number * number)) % 1 === 0);

  return ((factorial(number - 1) + 1) / (number * number)) % 1 === 0;

  // ((p-1)! + 1) / (p * p)
}
