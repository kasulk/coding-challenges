export function getNewNotes(salary: number, bills: number[]): number {
  const sumBills = bills.reduce((sum, num) => sum + num, 0);
  const disposableIncome = Math.max(0, salary - sumBills);

  return Math.trunc(disposableIncome / 5);
}
