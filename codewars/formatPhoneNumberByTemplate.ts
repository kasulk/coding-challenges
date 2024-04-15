export function formatNumber(number: number, template: string): string {
  const digits = [...number.toString()];
  const numDigits = digits.length;
  const templateChars = [...template];
  const numHashes = templateChars.filter((char) => char === "#").length;

  if (numDigits < numHashes) return "Invalid phone number";

  return templateChars
    .map((char) => (char === "#" ? digits.shift() : char))
    .join("");
}
