export function sameCase(char1: string, char2: string): number {
  const isLetterChar1 = /[a-z]/i.test(char1);
  const isLetterChar2 = /[a-z]/i.test(char2);

  if (!isLetterChar1 || !isLetterChar2) return -1;

  const isUpperCaseChar1 = /[A-Z]/.test(char1);
  const isUpperCaseChar2 = /[A-Z]/.test(char2);

  if (isUpperCaseChar1 && isUpperCaseChar2) return 1;
  if (!isUpperCaseChar1 && !isUpperCaseChar2) return 1;

  return 0;
}
