Array.prototype.square = function () {
  return this.slice().map((num) => num * num);
};

Array.prototype.cube = function () {
  return this.slice().map((num) => num * num * num);
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((sum, num) => sum + num, 0);
};

Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};
