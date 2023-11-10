export function countSheep(num: number): string {
  let output = "";

  for (let i = 1; i <= num; i++) {
    output += `${i} sheep...`;
  }

  return output;
}
