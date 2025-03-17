function kookaCounter(laughing) {
  const laughs = laughing.match(/ha/gi) || [];

  return laughs.reduce((sum, curr, i) => {
    const prev = laughs[i - 1];
    return curr === prev ? sum : ++sum;
  }, 0);
}
