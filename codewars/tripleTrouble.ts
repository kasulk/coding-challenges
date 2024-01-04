export function tripleTrouble(one: string, two: string, three: string): string {
  let result = "";

  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }

  return result;
}
