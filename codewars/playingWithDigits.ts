export class G964 {
  public static digPow = (n: number, p: number): number => {
    // turn n into array of number digits
    // loop through digits, sum them up with the successive powers of p
    // divide the sum by n
    // if the result is an integer, return it, else -1

    const poweredSum: number = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit) ** p++, 0);

    const k = poweredSum / n;

    return !(k % 1) ? k : -1;
  };
}
