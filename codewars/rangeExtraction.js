function solution(nums) {
  const output = [];
  let start = null;
  let isOpenRange = false;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const nextNum = nums[i + 1] ?? Infinity;
    const prevNum = nums[i - 1];
    // const [prev, curr] = nums.slice(i - 1, 2);
    console.log("i,currNum,start:", i, currNum, start);

    const diff = Math.abs(currNum - nextNum);
    isOpenRange = start !== null;

    if (diff === 1) {
      if (!isOpenRange) start = currNum;
      continue;
    }

    if (isOpenRange) {
      const currRange = [start, currNum];
      if (Math.abs(start - currNum) < 2) output.push(start, currNum);
      else output.push(currRange.join("-"));
      start = null;
      continue;
    }

    output.push(currNum);
  }

  return output.join(",");
}

// solution([ -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, ]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
