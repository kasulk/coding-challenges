function Counter() {
  let count = 0;

  this.check = () => count;
  this.increment = () => count++;
}
