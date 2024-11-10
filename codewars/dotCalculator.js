function dotCalculator(equation) {
  const [first, operator, second] = equation.replace("/", "").split(" ");
  const result = eval(`${first.length}${operator}${second.length}`);
  return ".".repeat(result);
}
