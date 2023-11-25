export function solution(start: number, finish: number): number {
  // loop from start to finish
  // for each jump, increase a counter by 1
  // if i+3 is smaller or equal to finish, do that
  // else, do i+1

  let numJumps = 0;
  let currPos = start;

  while (currPos < finish) {
    numJumps++;

    if (currPos + 3 <= finish) {
      currPos += 3;
      continue;
    }

    currPos++;
  }

  return numJumps;
}
