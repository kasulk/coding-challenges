//note: hackerrank.com/
/*
 * Complete the 'getMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getMin(s: string): number {
  //! works but too slow...

  let count = 0;

  while (s.length > 0) {
    if (s.includes("()")) {
      s = s.replace(/\(\)/g, "");
    } else {
      s = "(" + s;
      count++;
    }
  }

  return count;
}
