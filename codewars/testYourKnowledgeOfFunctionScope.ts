export function add(a: number): Function {
  return function (b: number): number {
    return a + b;
  };
}
