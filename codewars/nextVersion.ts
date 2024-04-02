export function nextVersion(version: string): string {
  const versionDigits = version.split(".");
  const numDots = versionDigits.length - 1;

  const oldVersionNum = BigInt(versionDigits.join(""));
  const newVersionNum = oldVersionNum + 1n;

  const newVersionDigits = newVersionNum.toString().split("");
  let newVersion: string[] = [];

  for (let i = 1; i <= numDots; i++) {
    const currDigit = newVersionDigits.pop();
    newVersion.unshift(currDigit!);
  }

  const newVersionDigitsRest = newVersionDigits.join("") || "0";
  const newVersionFirstDigit = newVersionDigitsRest;

  newVersion = [newVersionFirstDigit, ...newVersion];

  return newVersion.join(".");
}
