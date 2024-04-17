export function arrange(str: string): string {
  const result: string[] = [];
  const words = str.split(" ");
  let i = 0;

  function keep(str: string): void {
    result.push(str);
  }

  function putBack(str: string): void {
    words.unshift(str);
  }

  while (words.length) {
    if (words.length === 1) {
      const lastWord = words.pop()!;
      keep(lastWord);
      break;
    }

    const currPair = words.splice(0, 2);
    const [first, second] = currPair;

    if (first.length === second.length) {
      keep(first);
      putBack(second);
      i++;
      continue;
    }

    const [shorter, longer] = currPair.sort((a, b) => a.length - b.length);

    if (i % 2 === 0) {
      keep(shorter);
      putBack(longer);
    } else {
      keep(longer);
      putBack(shorter);
    }

    i++;
  }

  return result
    .map((word, i) => (i % 2 === 0 ? word.toLowerCase() : word.toUpperCase()))
    .join(" ");
}
