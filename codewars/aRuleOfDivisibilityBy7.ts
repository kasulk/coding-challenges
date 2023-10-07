export function seven(num: number): [number, number] {
  // loop as long as input number is >= 100
  /// convert number into a string
  /// take away the last digit, convert it back to a number and multiply it by 2
  /// convert the rest of the stringified number back to a number
  /// subtract the produkt from this number
  /// increase a loop counter by 1
  // after the loop return an array with the remaining number and the counter as elements

  let stepsCount = 0

  while (num >= 100) {
    const numString = num.toString()

    num = Number(numString.slice(0,-1)) - Number(numString.slice(-1)) * 2
  
    stepsCount++
  }
  return [num, stepsCount]
  }