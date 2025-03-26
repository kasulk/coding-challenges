function solve(equation) {
  const result = [];
  let num = "";

  for (const char of equation) {
    if (/\d/.test(char)) num += char;
    else {
      result.unshift(char, num);
      num = "";
    }
  }

  if (num) result.unshift(num);

  return result.join("");
}
