export function productFib(prod: number): [number, number, boolean] {
  let currFibs: [number, number] = [0, 1];
  let currProd = 0;

  while (currProd < prod) {
    const [first, second] = currFibs;
    const next = first + second;
    currFibs = [second, next];
    currProd = second * next;
    if (currProd === prod) return [...currFibs, true];
  }

  return [...currFibs, false];
}
