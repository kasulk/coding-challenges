function fizzbuzz(n) {
  return Array(n)
    .fill("x")
    .map((_, i) => {
      const curr = i + 1;
      if (curr % 3 === 0 && curr % 5 === 0) return "FizzBuzz";
      if (curr % 5 === 0) return "Buzz";
      if (curr % 3 === 0) return "Fizz";
      return curr;
    });
}
