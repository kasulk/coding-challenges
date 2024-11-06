export function uncompress(music: string): number[] {
  return music.split(",").flatMap((el) => {
    if (el.includes("*")) {
      const [num, count] = el.split("*").map(Number);
      return Array(count).fill(num);
    }
    if (el.includes("/")) {
      const [range, interval] = el.split("/");
      const [start, end] = range.replace("-", "~").split("~").map(Number);
      const signedInterval = start < end ? +interval : -interval;
      const arrLen = Math.abs(start - end) / Number(interval) + 1;
      return Array(arrLen)
        .fill(0)
        .map((_, i) => start + i * signedInterval);
    }
    if (el.includes("-")) {
      const [start, end] = el.replace("-", "~").split("~").map(Number);
      const arrLen = Math.abs(start - end) + 1;
      const signedInterval = start < end ? +1 : -1;
      return Array(arrLen)
        .fill(0)
        .map((_, i) => start + i * signedInterval);
    }
    return Number(el);
  });
}
