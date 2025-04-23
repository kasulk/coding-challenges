function determineTime(durations) {
  const totalSecs = durations.reduce((sum, curr) => {
    const [hrs, mins, secs] = curr.split(":").map(Number);
    const currTotalSecs = hrs * 3600 + mins * 60 + secs;
    return sum + currTotalSecs;
  }, 0);

  return totalSecs <= 24 * 3600;
}
