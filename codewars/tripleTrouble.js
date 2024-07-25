function tripledouble(num1, num2) {
  const tripleDigits = getTripleDigits(num1);
  const num2Str = num2.toString();

  for (let digit of tripleDigits) {
    if (num2Str.includes(digit + digit)) return 1;
  }

  return 0;
}

function getTripleDigits(num) {
  const tripleDigits = [];
  let count = 1;

  num
    .toString()
    .split("")
    .forEach((currDigit, i, arr) => {
      const prevDigit = arr[i - 1];

      if (currDigit === prevDigit) {
        count++;
        if (count === 3) tripleDigits.push(currDigit);
      } else count = 1;
    });

  return tripleDigits;
}
