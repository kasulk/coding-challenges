function vampireTest(a, b) {
  const product = a * b;
  const sortedProductDigits = product.toString().split("").sort();
  const aDigits = a.toString().split("");
  const bDigits = b.toString().split("");
  const sortedMultiplicantDigits = [...aDigits, ...bDigits].sort();
  return sortedProductDigits.join("") === sortedMultiplicantDigits.join("");
}
