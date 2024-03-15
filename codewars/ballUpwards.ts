export function maxBall(v0: number): number {
  let prevHeight = 0;

  for (let t = 0; ; t++) {
    const currHeight = calcHeightAtT(v0 / 3.6, t / 10);
    console.log("t,prevHeight,currHeight:", t, prevHeight, currHeight);

    if (prevHeight > currHeight) return t - 1;
    prevHeight = currHeight;
  }
}

function calcHeightAtT(v: number, t: number): number {
  const g = 9.81;
  return v * t - 0.5 * g * t * t;
}
