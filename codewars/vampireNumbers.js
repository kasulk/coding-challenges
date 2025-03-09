function vampireTest(a, b) {
  const sortedProduct = (a * b).toString().split("").sort().join("");
  const sortedMultiplicants = (a.toString() + b.toString()).split("").sort().join("");
  return sortedProduct === sortedMultiplicants;
}
