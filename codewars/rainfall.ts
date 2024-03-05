export function mean(town: string, str: string): number {
  const values = getValues(town, str);
  if (!values) return -1;

  return values.reduce((sum, value) => sum + value) / 12;
}

export function variance(town: string, str: string): number {
  const values = getValues(town, str);
  if (!values) return -1;

  const average = mean(town, str);

  return (
    values
      .map((value) => Math.abs(average - value) ** 2)
      .reduce((sum, squaredDeviation) => sum + squaredDeviation) / 12
  );
}

export function getValues(town: string, str: string): number[] | null {
  const [city, data] = str
    .split("\n")
    .filter((line) => line.includes(town))
    .join()
    .split(":");

  if (city !== town) return null;

  const nakedValues = data
    .replace(/[a-z\s]/gi, "")
    .split(",")
    .map(Number);

  return nakedValues;
}
