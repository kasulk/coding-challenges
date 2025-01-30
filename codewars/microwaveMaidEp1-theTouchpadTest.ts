export function getBestCombination(time: number): string {
  const standard = getMinsAndSecsWithStandardMethod(time);
  const alternat = getMinsAndSecsWithAlternativeMethod(time);
  const standardMinLen = removeConsecutiveDigits(standard).length;
  const alternatMinLen = removeConsecutiveDigits(alternat).length;

  if (standardMinLen < alternatMinLen) return standard;
  if (standardMinLen > alternatMinLen) return alternat;
  if (standard.length < alternat.length) return standard;
  if (standard.length > alternat.length) return alternat;
  return standard;
}

function getMinsAndSecsWithStandardMethod(time: number): string {
  const [mins, secs] = convertSecsToMinsAndSecs(time);
  return mins
    ? mins.toString() + secs.toString().padStart(2, "0")
    : secs.toString().padStart(2, "0");
}

function getMinsAndSecsWithAlternativeMethod(time: number): string {
  let [mins, secs] = convertSecsToMinsAndSecs(time);

  if (mins && secs <= 39) {
    mins--;
    secs += 60;
  }

  return mins ? mins.toString() + secs.toString() : secs.toString();
}

function convertSecsToMinsAndSecs(timeInSecs: number): number[] {
  const mins = Math.trunc(timeInSecs / 60);
  const secs = timeInSecs % 60;
  return [mins, secs];
}

function removeConsecutiveDigits(strNum: string): string {
  return strNum.split("").reduce((acc, curr, i, arr) => {
    const prev = arr[i - 1];
    return curr === prev ? acc : acc + curr;
  }, "");
}
