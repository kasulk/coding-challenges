export class G964 {
  public static nbDig(n: number, d: number): number {
    // loop through all numbers from 1 to n, for each iteration
    // calculate its square
    // concatenate the result to a string
    // remove everything that doesn't equal the digit
    // return the length of the result

    const regex = new RegExp(`[^${d}]`, "g");

    return Array(n + 1) // create [] with n+1 empty items
      .fill("x") // fill the [] with x's
      .map((_, i) => i) // replace the x's with the items indeces i.e. numbers from 0 to n
      .reduce((acc, curr) => (acc += curr * curr), "")
      .replace(regex, "").length;
  }
}
