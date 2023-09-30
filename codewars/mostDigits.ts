export class Kata {
  static findLongest(array: number[]): number {
    // create a variable to store the longestNum
    // loop through input array
    // convert each element into a string
    // compare each elements length with the length of the value in the variable
    // if its longer, overwrite the variables value with the new value
    // after the loop, return the variables value

    let longestNum = 0;

    for (let number of array) {
      if (number.toString().length > longestNum.toString().length)
        longestNum = number;
    }

    return longestNum;
  }
}
