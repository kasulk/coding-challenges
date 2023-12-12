export function amIAfraid(day: string, num: number): boolean {
  return (
    (day === "Monday" && num === 12) ||
    (day === "Tuesday" && num > 95) ||
    (day === "Wednesday" && num === 34) ||
    (day === "Thursday" && num === 0) ||
    (day === "Friday" && num % 2 === 0) ||
    (day === "Saturday" && num === 56) ||
    (day === "Sunday" && Math.abs(num) === 666)
  );
}
