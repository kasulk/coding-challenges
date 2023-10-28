export function solve(str: string) {
  // for each letter,
  // if its a vowel
  /// increase a vowel streak counter by 1
  /// else reset the current vowel streak to 0
  // if the current vowelstreak is longer than the max
  /// store the current value in max
  // after the loop, return the max value

  let currVowelStreak = 0;
  let maxVowelStreak = 0;

  for (let char of str) {
    if (/[aeiou]/.test(char)) currVowelStreak++;
    else currVowelStreak = 0;

    if (currVowelStreak > maxVowelStreak) maxVowelStreak = currVowelStreak;
  }

  return maxVowelStreak;
}
