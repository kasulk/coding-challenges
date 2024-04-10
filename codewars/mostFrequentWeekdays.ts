export function mostFrequentDays(year: number): string[] {
  const output: string[] = [];
  const januaryFirst = `${year}-01-01`;
  const firstDayOfYearInMilSecs = new Date(januaryFirst).getTime();
  const oneDayInMilSecs = 24 * 60 * 60 * 1000;
  const weekdays =
    "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
  const weekdayCounts: { [key: string]: number } = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  };

  for (let i = firstDayOfYearInMilSecs; ; i += oneDayInMilSecs) {
    const currDate = new Date(i);
    if (currDate.getFullYear() === year + 1) break;

    const currDayNum = currDate.getDay();
    const currDayName = weekdays[currDayNum];

    weekdayCounts[currDayName]++;
  }

  const maxDaysNum = Math.max(...Object.values(weekdayCounts));

  Object.entries(weekdayCounts).forEach(([weekday, count]) => {
    if (count === maxDaysNum) output.push(weekday);
  });

  return output;
}
