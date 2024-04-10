export function mostFrequentDays(year: number): string[] {
  const result: string[] = [];
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

  const firstDayOfYearInMilSecs = new Date(`${year}-01-01`).getTime();
  const oneDayInMilSecs = 24 * 60 * 60 * 1000;

  for (let i = firstDayOfYearInMilSecs; ; i += oneDayInMilSecs) {
    const currDate = new Date(i);
    if (currDate.getFullYear() === year + 1) break;

    const currDayNum = currDate.getDay();
    const currDayName = weekdays[currDayNum];

    weekdayCounts[currDayName]++;
  }

  const maxDaysCount = Math.max(...Object.values(weekdayCounts));

  Object.entries(weekdayCounts).forEach(([weekday, count]) => {
    if (count === maxDaysCount) result.push(weekday);
  });

  return result;
}
