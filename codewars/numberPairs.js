function getLargerNumbers(numsA, numsB) {
  return numsA.map((numA, i) => (numA > numsB[i] ? numA : numsB[i]));
}
