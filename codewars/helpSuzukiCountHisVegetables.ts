export function countVegetables(str: string): [number, string][] {
  const vegetables = [
    "cabbage",
    "carrot",
    "celery",
    "cucumber",
    "mushroom",
    "onion",
    "pepper",
    "potato",
    "tofu",
    "turnip",
  ];

  const veggiesNumsObj: { [key: string]: number } = {};
  const mixedUpVeggies: string[] = str
    .split(" ")
    .filter((item) => vegetables.includes(item));

  mixedUpVeggies.forEach((veggie) => {
    if (!veggiesNumsObj[veggie]) veggiesNumsObj[veggie] = 0;
    veggiesNumsObj[veggie]++;
  });

  const veggiesNums: [number, string][] = Object.entries(veggiesNumsObj).map(
    ([key, value]) => [value, key]
  );

  return veggiesNums.sort((a, b) => {
    if (a[0] === b[0]) return b[1].localeCompare(a[1]);
    return b[0] - a[0];
  });
}
