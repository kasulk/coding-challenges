export function evaporator(
  content: number,
  evapPerDayPercentage: number,
  thresholdPercentage: number
): number {
  // as long as the evaporator is useful
  /// remove what gets lost every day from its content
  /// increase day counter by 1
  // after the loop, return the days

  let days = 0;
  const threshold = content * (thresholdPercentage / 100);

  while (content > threshold) {
    content -= content * (evapPerDayPercentage / 100);
    days++;
  }

  return days;
}
