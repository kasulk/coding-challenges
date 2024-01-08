export function sumin(num: number): number {
  let sum = 0;

  for (let x = 1; x <= num; x++) {
    for (let y = 1; y <= num; y++) {
      sum += Math.min(x, y);
    }
  }

  return sum;
}

export function sumax(num: number): number {
  let sum = 0;

  for (let x = 1; x <= num; x++) {
    for (let y = 1; y <= num; y++) {
      sum += Math.max(x, y);
    }
  }

  return sum;
}

export function sumsum(num: number): number {
  return sumin(num) + sumax(num);
}
