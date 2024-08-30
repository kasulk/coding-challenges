function mostMoney(students) {
  if (students.length === 1) return students[0].name;

  const amounts = students.map((student) => {
    const { fives, tens, twenties } = student;
    return fives * 5 + tens * 10 + twenties * 20;
  });

  if (amounts.every((amount) => amount === amounts[0])) return "all";

  const maxAmount = Math.max(...amounts);
  const indexOfMax = amounts.indexOf(maxAmount);

  return students[indexOfMax].name;
}
