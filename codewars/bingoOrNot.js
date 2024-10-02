function bingo(nums) {
  const bingoLetterNums = [2, 9, 14, 7, 15];

  for (const letterNum of bingoLetterNums) {
    if (!nums.includes(letterNum)) return "LOSE";
  }

  return "WIN";
}
