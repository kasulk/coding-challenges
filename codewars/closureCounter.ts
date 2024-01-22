export function counter(): Function {
  let num = 0;

  function increaseCounter() {
    return ++num;
  }

  return increaseCounter;
}
