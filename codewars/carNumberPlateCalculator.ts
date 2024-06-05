export function findTheNumberPlate(customerID: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const serial = ((customerID % 999) + 1).toString().padStart(3, "0");

  const product = Math.trunc(customerID / 999);

  const letterIndexes: [number, number, number] = [0, 0, 0];
  let [l1, l2, l3] = letterIndexes;

  l1 = product % alphabet.length;
  l2 = Math.trunc(product / alphabet.length) % alphabet.length;
  l3 = Math.trunc(product / alphabet.length ** 2);

  const letters = alphabet[l1] + alphabet[l2] + alphabet[l3];

  return letters + serial;
}
