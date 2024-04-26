type RuleFunction = (a: number, b: number) => number;

export function reduceByRules(nums: number[], rules: RuleFunction[]): number {
  return nums.reduce((result, curr, i) => {
    const currIndex = i - 1;
    const currRule = rules[currIndex % rules.length];

    return currRule(result, curr);
  });
}
