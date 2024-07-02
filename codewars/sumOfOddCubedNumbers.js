function cubeOdd(arr) {
  const oddCubesSum = arr.reduce((sum, num) => {
    const currCube = num ** 3;
    return currCube % 2 === 0 ? sum : sum + currCube;
  }, 0);

  return !isNaN(oddCubesSum) ? oddCubesSum : undefined;
}
