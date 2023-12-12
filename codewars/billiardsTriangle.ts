export function pyramid(balls: number): number {
  // loop as long as there are more balls left then rows on the table
  // increase the row count by 1
  // remove the first ball from stack and put it on the table
  // increase the row count by 1
  // next, remove as many balls from the stack as there are rows on the table
  // put them on the table
  // when there are less balls left than rows on the table
  // return the row count

  let ballsLeft = balls;
  let numRows = 0;

  while (ballsLeft > numRows) {
    numRows++;
    ballsLeft -= numRows;
  }

  return numRows;
}
