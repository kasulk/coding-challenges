function solve(withdrawal) {
  const bills = [500, 200, 100, 50, 20, 10];
  let rest = withdrawal;
  let sumBills = 0;

  for (const bill of bills) {
    const numBill = Math.trunc(rest / bill);
    sumBills += numBill;
    rest -= numBill * bill;
  }

  return !rest ? sumBills : -1;
}
