String.prototype.isLetter = function () {
  return this.length === 1 && /[a-z]/i.test(this);
};
