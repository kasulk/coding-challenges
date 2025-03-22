function testResult(nums) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  const avgStr = (sum / nums.length).toFixed(3);
  const output = [Number(avgStr)];

  const dict = nums.reduce(
    (acc, curr) => {
      if (curr === 9 || curr === 10) return { ...acc, h: acc.h + 1 };
      if (curr === 7 || curr === 8) return { ...acc, a: acc.a + 1 };
      else return { ...acc, l: acc.l + 1 };
    },
    { h: 0, a: 0, l: 0 }
  );

  output.push(dict);

  if (dict.h && !dict.a && !dict.l) output.push("They did well");

  return output;
}
