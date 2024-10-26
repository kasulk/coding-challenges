function paintLetterboxes(start, end) {
  const digitCounts = Array(10).fill(0);

  for (let num = start; num <= end; num++) {
    for (const digit of num.toString()) digitCounts[digit]++;
  }

  return digitCounts;
}
