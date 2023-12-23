export function to24hourtime(
  hour: number,
  minute: number,
  period: string
): string {
  //
  let hour24 = hour;

  if (hour === 12) hour24 = 0;
  if (period === "pm") hour24 += 12;

  return (
    hour24.toString().padStart(2, "0") + minute.toString().padStart(2, "0")
  );
}
