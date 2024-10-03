type State = { modifier: number };

const state: State = { modifier: 2 };

export function solution(nums: number[], options: State) {
  return [...nums].map((num) => num + 2 * options.modifier);
}
