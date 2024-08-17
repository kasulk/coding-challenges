function squares(x, n) {
  if (n <= 0) return [];

  const result = [x];

  for (let i = 0; i < n - 1; i++) {
    result.push(result[i] ** 2);
  }

  return result;
}
