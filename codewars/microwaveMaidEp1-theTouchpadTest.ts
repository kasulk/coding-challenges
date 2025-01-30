export function getBestCombination(time: number): string {
  const methodStandard = getMethodStandard(time);
  const methodStandardLen = removeConsecutiveDigits(methodStandard).length;
  const methodAlt = getMethodAlt(time);
  const methodAltLen = removeConsecutiveDigits(methodAlt).length;

  if (methodStandardLen > methodAltLen) return methodAlt;
  if (methodStandardLen < methodAltLen) return methodStandard;
  if (methodStandard.length > methodAlt.length) return methodAlt;
  if (methodStandard.length < methodAlt.length) return methodStandard;
  return methodStandard;
}

function convertSecsToMinsAndSecs(timeInSecs: number): number[] {
  const mins = Math.trunc(timeInSecs / 60);
  const secs = timeInSecs % 60;
  return [mins, secs];
}

function getMethodStandard(time: number): string {
  const [mins, secs] = convertSecsToMinsAndSecs(time);
  return mins
    ? mins.toString() + secs.toString().padStart(2, "0")
    : secs.toString().padStart(2, "0");
}

function getMethodAlt(time: number): string {
  let [mins, secs] = convertSecsToMinsAndSecs(time);

  if (mins && secs <= 39) {
    mins--;
    secs += 60;
  }

  return mins ? mins.toString() + secs.toString() : secs.toString();
}

function removeConsecutiveDigits(strNum: string): string {
  return strNum.split("").reduce((acc, curr, i, arr) => {
    const prev = arr[i - 1];
    return curr === prev ? acc : acc + curr;
  }, "");
}
