export const mean = (town: string, str: string): number => {
  const values = getValues(town, str);

  if (!Array.isArray(values)) return -1;
  return values.reduce((acc, curr) => acc + curr) / 12;
};

export const variance = (town: string, str: string): number => {
  const values = getValues(town, str);

  if (values === -1) return -1;

  const average = mean(town, str);
  const teset = values.map((value) => Math.abs(average - value) ** 2);
  //   const quads = teset.map((e) => e * e);

  //   return quads.reduce((acc, curr) => acc + curr) / 12;
  return teset.reduce((acc, curr) => acc + curr) / 12;
};

export function getValues(town: string, str: string): number[] | -1 {
  const [city, data] = str
    .split("\n")
    .filter((line) => line.includes(town))
    .join()
    .split(":");

  if (city !== town) return -1;

  const values = data
    .replace(/[a-z\s]/gi, "")
    .split(",")
    .map(Number);

  return values;
}
