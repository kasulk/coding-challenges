export function graph(nums: number[]): string {
  const maxNum = Math.max(...nums);
  const result: string[] = [];

  const top = " ____ ";
  const body = "|    |";
  const empty = "......";

  for (let level = maxNum; level >= 0; level--) {
    let currLevel = "";
    let axis = "";

    for (const num of nums) {
      if (num === level) currLevel += top;
      if (num > level) currLevel += body;
      if (num < level) currLevel += empty;
    }

    if (level === maxNum) axis += " ^ ";
    else axis += " | ";

    currLevel += axis + level;
    result.push(currLevel);
  }

  return result.join("\n");
}
