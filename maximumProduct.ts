export function adjacentElementsProduct(arr: number[]): number {
  // map through input array, from index 1
  /// return the product of every element and the element before it
  // return the max

  return Math.max(
    ...arr.map((element, i) => (i > 0 ? element * arr[i - 1] : -Infinity))
  );
}
