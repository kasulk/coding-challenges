export function bouncingBall(
  dropHeight: number,
  bounce: number,
  window: number
): number {
  // loop as long as the bounce height is greater than window
  // for each iteration,
  // multiply the new height by the bounce
  // and increase a counter by 2
  // after the loop, return the value of the counter

  if (dropHeight <= 0 || bounce <= 0 || bounce >= 1 || window >= dropHeight)
    return -1;

  let numWindowPasses = 1;
  let bounceHeight = dropHeight * bounce;

  while (bounceHeight > window) {
    numWindowPasses += 2;
    bounceHeight *= bounce;
  }

  return numWindowPasses;
}
