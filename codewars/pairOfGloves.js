function numberOfPairs(gloves) {
  const gloveNums = {};
  let numPairs = 0;

  gloves.forEach((glove) => {
    if (!gloveNums[glove]) gloveNums[glove] = 0;
    gloveNums[glove]++;

    if (gloveNums[glove] % 2 === 0) numPairs++;
  });

  return numPairs;
}
