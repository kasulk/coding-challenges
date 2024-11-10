function dotCalculator(equation) {
  const [left, operator, right] = equation.replace("/", "").split(" ");
  const result = eval(`${left.length}${operator}${right.length}`);
  return ".".repeat(result);
}
