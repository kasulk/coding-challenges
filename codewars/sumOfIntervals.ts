export function sumOfIntervals(intervals: [number, number][]): number {
  intervals.sort((a, b) => a[0] - b[0]);

  let startLen = 0;
  let endLen = intervals.length;

  while (startLen != endLen) {
    startLen = intervals.length;

    for (let i = 0; i < intervals.length; i++) {
      let [currStart, currEnd] = intervals.splice(i, 1)[0];

      // loop through rest of elements
      for (let j = 0; j < intervals.length; j++) {
        const [start, end] = intervals[j];
        if (isInRange(start, [currStart, currEnd])) {
          intervals.splice(j, 1);
          currStart = Math.min(currStart, start);
          currEnd = Math.max(currEnd, end);
        }
      }

      intervals.unshift([currStart, currEnd]);
    }

    endLen = intervals.length;
  }

  return intervals.reduce((sum, curr) => sum + curr[1] - curr[0], 0);
}

function isInRange(num: number, range: [number, number]): boolean {
  const [start, end] = range;
  return start <= num && num < end;
}

// function mergeIntervals(interval1, interval2): number[] {
// return [0];
// }
