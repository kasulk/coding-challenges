function calculate(num1, operation, num2) {
  if (!"+-*/".includes(operation)) return null;
  if (!num2 && operation === "/") return null;

  return eval(`${num1}${operation}${num2}`);
}
