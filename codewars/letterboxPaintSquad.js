function paintLetterboxes(start, end) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = start; i <= end; i++) {
    i.toString()
      .split("")
      .forEach((digit) => result[digit]++);
  }

  return result;
}
