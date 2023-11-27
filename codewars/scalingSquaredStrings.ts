export const scale = (str: string, k: number, n: number): string => {
  if (!str) return "";

  const horizontalScale = str.split("\n").map((subStr) =>
    subStr
      .split("")
      .map((char) => char.repeat(k))
      .join("")
  );

  const output: string[] = [];

  horizontalScale.forEach((subStr) => {
    for (let i = 0; i < n; i++) {
      output.push(subStr);
    }
  });

  return output.join("\n");
};
