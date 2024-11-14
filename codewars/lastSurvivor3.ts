export function lastSurvivors(strs: string[], nums: number[]): string {
  return rowsToCols([...strs.reverse()])
    .map((col, i) => col.slice(nums[i]))
    .join("");
}

function rowsToCols(strs: string[]): string[] {
  const len = strs[0] ? strs[0].length : 0;
  const result = Array(len).fill("");
  strs.forEach((str) => {
    str.split("").forEach((char, i) => {
      if (char !== " ") result[i] += char;
    });
  });
  return result;
}
