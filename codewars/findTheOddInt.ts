export const findOdd = (xs: number[]): number => {
  // create an object
  // for every new number in the array, add a new property with the number as its name
  // initial value of the property is 'true'
  // if number is found again, switch the propertys value to its opposite
  // at the end, find the property with the value 'true'

  let isOdd: { [key: number]: boolean } = {};

  for (let element of xs) {
    if (isOdd.hasOwnProperty(element)) {
      isOdd[element] = !isOdd[element];
    } else {
      isOdd[element] = true;
    }
  }
  for (let key in isOdd) {
    if (isOdd[key] === true) return Number(key);
  }
  return 0;
};
