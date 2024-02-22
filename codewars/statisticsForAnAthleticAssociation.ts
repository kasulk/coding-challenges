export function stat(str: string): string {
  if (!str) return "";

  const results = str.split(", ");
  const numResults = results.length;

  const sortedResultsInSecs = results
    .map((result) => {
      const [hh, mm, ss] = result.split("|").map(Number);
      return ss + mm * 60 + hh * 3600;
    })
    .sort((a, b) => a - b);

  const max = sortedResultsInSecs.slice(-1)[0];
  const min = sortedResultsInSecs[0];
  const range = max - min;

  const sum = sortedResultsInSecs.reduce((sum, result) => sum + result, 0);
  const average = Math.trunc(sum / numResults);

  let median: number;
  const medianIndex = Math.trunc(numResults / 2);

  if (numResults % 2 !== 0) {
    median = sortedResultsInSecs[medianIndex];
  } else {
    const firstMedian = sortedResultsInSecs[medianIndex - 1];
    const secondMedian = sortedResultsInSecs[medianIndex];
    median = Math.trunc((firstMedian + secondMedian) / 2);
  }

  return (
    "Range: " +
    secsToHMS(range) +
    " Average: " +
    secsToHMS(average) +
    " Median: " +
    secsToHMS(median)
  );
}

export function secsToHMS(secs: number) {
  let rest = secs % 3600;
  const hh = Math.trunc(secs / 3600)
    .toString()
    .padStart(2, "0");
  const mm = Math.trunc(rest / 60)
    .toString()
    .padStart(2, "0");
  const ss = (rest % 60).toString().padStart(2, "0");

  return `${hh}|${mm}|${ss}`;
}
