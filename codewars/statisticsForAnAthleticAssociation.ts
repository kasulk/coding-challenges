export function stat(str: string): string {
  // turn input str into array
  // convert each time to seconds
  ///
  // calculate the 3 values
  // convert the seconds back to h|m|s
  // return the results
  console.log(str);
  if (!str) return "";

  const results = str.split(", ");
  const numResults = results.length;

  const resultsInSecs = results.map((result) => {
    const [hh, mm, ss] = result.split("|").map(Number);
    return ss + mm * 60 + hh * 3600;
  });
  const sortedResultsInSecs = [...resultsInSecs].sort((a, b) => a - b);

  const max = Math.max(...resultsInSecs);
  const min = Math.min(...resultsInSecs);
  const range = max - min;

  const sum = resultsInSecs.reduce((sum, result) => sum + result, 0);
  const average = Math.trunc(sum / numResults);

  let median: number;
  const medianIndex = Math.trunc(numResults / 2);

  if (numResults % 2 !== 0) median = sortedResultsInSecs[medianIndex];
  else
    median = Math.trunc(
      (sortedResultsInSecs[medianIndex] +
        sortedResultsInSecs[medianIndex - 1]) /
        2
    );

  return `Range: ${convertSecsToHMS(range)} Average: ${convertSecsToHMS(
    average
  )} Median: ${convertSecsToHMS(median)}`;
}

export function convertSecsToHMS(secs: number) {
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
// stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')
// stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
// stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17");
