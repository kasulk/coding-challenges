export function uncompress(music: string): number[] {
  return music.split(",").flatMap((token) => {
    if (token.includes("*")) {
      const [num, count] = token.split("*").map(Number);
      return Array(count).fill(num);
    }

    if (token.includes("/")) {
      const [range, interval] = token.split("/");
      return createArrayFromRange(range, Number(interval));
    }

    if (token.includes("-")) return createArrayFromRange(token);

    return Number(token);
  });
}

function createArrayFromRange(range: string, interval: number = 1): number[] {
  const dashPosition = range.indexOf("-", 1);
  const start = Number(range.slice(0, dashPosition));
  const end = Number(range.slice(dashPosition + 1));
  const arrLen = Math.abs(start - end) / interval + 1;
  const signedInterval = start < end ? +interval : -interval;
  return Array(arrLen)
    .fill(0)
    .map((_, i) => start + i * signedInterval);
}
