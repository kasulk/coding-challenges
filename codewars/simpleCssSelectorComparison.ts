export function compare(a: string, b: string): string {
  const selectorCountsA = getSelectorCounts(a);
  const selectorCountsB = getSelectorCounts(b);

  for (let i = 0; i < selectorCountsA.length; i++) {
    const numA = selectorCountsA[i];
    const numB = selectorCountsB[i];

    if (numA > numB) return a;
    if (numB > numA) return b;
  }

  return b;
}

function getSelectorCounts(str: string): [number, number, number] {
  const selectorCounts: [number, number, number] = [0, 0, 0];
  const words = str.split(" ");

  if (str === "*") return selectorCounts;

  words.forEach((word) => {
    word.split("").forEach((char) => {
      if (char === "#") selectorCounts[0]++;
      if (char === ".") selectorCounts[1]++;
    });

    if (!word.startsWith(".") && !word.startsWith("#")) selectorCounts[2]++;
  });

  return selectorCounts;
}
