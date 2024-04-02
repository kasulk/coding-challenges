export function nextVersion(version: string): string {
  const versionArr = version.split(".");
  const numDots = versionArr.length - 1;

  const versionNum = BigInt(versionArr.join(""));
  const newVersionNum = versionNum + 1n;

  const newVersionDigits = newVersionNum.toString().split("");
  let nextVersion: string[] = [];

  for (let i = 0; i < numDots; i++) {
    const currDigit = newVersionDigits.pop();
    nextVersion.unshift(currDigit!);
  }

  const firstNumber = newVersionDigits.join("") || 0;

  return [firstNumber, ...nextVersion].join(".");
}
