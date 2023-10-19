String.prototype.eightBitNumber = function (): boolean {
  // check if the input is a number between 0 and 255
  // input should only contain digits
  // if the first is 0, there can't be any other digits

  return /^(?!0\d)\d+$/.test(this.toString()) && Number(this) <= 255;
};
