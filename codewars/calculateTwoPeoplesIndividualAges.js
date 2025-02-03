function getAges(sum, diff) {
  const older = sum / 2 + diff / 2;
  const younger = sum - older;
  if (sum < 0 || diff < 0 || older < 0 || younger < 0) return null;
  return [older, younger];
}
