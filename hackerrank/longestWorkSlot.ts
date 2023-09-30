//note: hackerrank.com/
/*
 * Complete the 'findLongestSingleSlot' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY leaveTimes as parameter.
 */

function findLongestSingleSlot(leaveTimes: number[][]): string {
  //   console.log("leaveTimes:", leaveTimes);
  const nurseIds = "abcdefghijklmnopqrstuvwxyz";
  let startTime = 0;
  let maxShift = 0;
  let nurseWithMaxShift = 0;

  for (let i = 0; i < leaveTimes.length; i++) {
    if (leaveTimes[i][1] - startTime > maxShift) {
      // console.log(i, 'maxShift:', maxShift, leaveTimes[i][1], startTime)
      maxShift = leaveTimes[i][1] - startTime;
      nurseWithMaxShift = leaveTimes[i][0];
    }
    startTime = leaveTimes[i][1];
    // else {
    //   nurseWithMaxShift = leaveTimes[0][0];
    // }
  }
  //   console.log(nurseIds[nurseWithMaxShift]);
  return nurseIds[nurseWithMaxShift];
}
