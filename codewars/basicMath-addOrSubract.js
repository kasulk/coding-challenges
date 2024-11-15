function calculate(str) {
  const operatornizedStr = str.replaceAll("plus", "+").replaceAll("minus", "-");
  return eval(operatornizedStr).toString();
}
