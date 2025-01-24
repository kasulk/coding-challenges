Array.prototype.remove_ = function (integers, values) {
  return integers.filter((num) => !values.includes(num));
};
