function zero(input) {
  return calc(0, input);
}
function one(input) {
  return calc(1, input);
}
function two(input) {
  return calc(2, input);
}
function three(input) {
  return calc(3, input);
}
function four(input) {
  return calc(4, input);
}
function five(input) {
  return calc(5, input);
}
function six(input) {
  return calc(6, input);
}
function seven(input) {
  return calc(7, input);
}
function eight(input) {
  return calc(8, input);
}
function nine(input) {
  return calc(9, input);
}

function plus(input) {
  return "+" + input;
}
function minus(input) {
  return "-" + input;
}
function times(input) {
  return "*" + input;
}
function dividedBy(input) {
  return "/" + input;
}

function calc(num, input = 0) {
  return Math.trunc(eval(num + input));
}
