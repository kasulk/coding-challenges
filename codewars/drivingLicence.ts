export function driver(data: string[]): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [first, middle, last, date, sex] = data;
  const [birthDay, birthMonth, birthYear] = date.split("-");

  const surname = last.slice(0, 5).toUpperCase();

  const sexBonus = sex === "F" ? 50 : 0;

  const birthDecade = birthYear[2];
  const birthYearNum = birthYear[3];
  const birthMonthNum =
    months.findIndex((month) => month === birthMonth.slice(0, 3)) +
    1 +
    sexBonus;

  const initials = middle[0] ? first[0] + middle[0] : first[0];

  const arbitrary = "9";
  const check = "AA";

  return (
    surname.padEnd(5, "9") +
    birthDecade +
    birthMonthNum.toString().padStart(2, "0") +
    birthDay +
    birthYearNum +
    initials.padEnd(2, "9") +
    arbitrary +
    check
  );
}
