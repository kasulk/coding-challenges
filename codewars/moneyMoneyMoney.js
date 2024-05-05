function calculateYears(principal, interestRate, taxRate, desiredSum) {
  if (principal === desiredSum) return 0;

  let currSum = principal;

  for (let year = 1; ; year++) {
    const interestBeforeTax = currSum * interestRate;
    const interestAfterTax = interestBeforeTax * (1 - taxRate);
    currSum += interestAfterTax;
    if (currSum >= desiredSum) return year;
  }
}
