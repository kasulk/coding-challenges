export function isInteresting(num: number, awesomePhrases: number[]): number {
  for (let i = 0; i <= 2; i++) {
    const currNum = num + i;
    const digits = currNum.toString().split("").map(Number);

    if (currNum < 100) continue;

    if (
      awesomePhrases.includes(currNum) ||
      hasTrailingZeros(digits) ||
      isRepdigit(digits) ||
      isSequentialIncrementing(digits) ||
      isSequentialDecrementing(digits) ||
      isPalindrome(digits)
    ) {
      return currNum === num ? 2 : 1;
    }
  }

  return 0;
}

function hasTrailingZeros(digits: number[]): boolean {
  return isRepdigit(digits.slice(1), 0);
}

function isRepdigit(digits: number[], optionalNum?: number): boolean {
  const num = optionalNum ?? digits[0];
  for (const digit of digits) {
    if (digit !== num) return false;
  }
  return true;
}

function isSequentialIncrementing(digits: number[]): boolean {
  for (let i = 0; i < digits.length - 1; i++) {
    const curr = digits[i];
    const next = digits[i + 1] || 10;
    if (curr !== next - 1) return false;
  }
  return true;
}

function isSequentialDecrementing(digits: number[]): boolean {
  for (let i = 0; i < digits.length - 1; i++) {
    const curr = digits[i];
    const next = digits[i + 1];
    if (next !== curr - 1) return false;
  }
  return true;
}

function isPalindrome(digits: number[]): boolean {
  const halfLen = Math.floor(digits.length / 2);
  const firstHalf = digits.slice(0, halfLen);
  const secondHalf = digits.slice(-halfLen);
  return firstHalf.join("") === secondHalf.reverse().join("");
}
