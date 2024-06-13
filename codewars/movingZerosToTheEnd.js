function moveZeros(arr) {
  const numZeros = arr.filter((item) => item === 0).length;
  const zerosRemoved = arr.filter((item) => item !== 0);

  return [...zerosRemoved, ...Array(numZeros).fill(0)];
}
