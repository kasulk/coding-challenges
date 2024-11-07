export function graph(nums: number[]): string {
  const result: string[] = [];
  const max = Math.max(...nums);

  for (let level = max; level >= 0; level--) {
    const axis = level === max ? " ^ " : " | ";
    let row = "";

    for (const num of nums) {
      if (num === level) row += " ____ ";
      if (num > level) row += "|    |";
      if (num < level) row += "......";
    }

    row += axis + level;
    result.push(row);
  }

  return result.join("\n");
}
