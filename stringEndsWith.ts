export function solution(str: string, ending: string): boolean {
  return !ending || str.slice(-ending.length) === ending;
}
