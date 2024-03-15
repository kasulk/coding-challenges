export function maxBall(v0: number): number {
  let prevHeight = 0;

  for (let t = 0; ; t++) {
    const currHeight = calcHeightAtTenthOfSec(v0 / 3.6, t / 10);

    if (prevHeight > currHeight) return t - 1;
    prevHeight = currHeight;
  }
}

function calcHeightAtTenthOfSec(speed: number, time: number): number {
  const gravity = 9.81;
  return speed * time - 0.5 * gravity * time ** 2;
}
