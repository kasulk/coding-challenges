String.prototype.sixBitNumber = function (): boolean {
  // check, if the input is (front to back) either
  // a digit between 0-9
  // a digit 1-5 and a digit 0-9
  // a 6 and a digit 0-3

  return /^(\d|[1-5]\d|6[0-3])$/.test(this.toString());
};
