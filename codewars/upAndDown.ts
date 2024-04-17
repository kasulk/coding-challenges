export function arrange(str: string): string {
  const words = str.split(" ");
  const result: string[] = [];
  let i = 0;

  // console.log("====================");

  while (words.length) {
    if (words.length === 1) {
      let last = words.pop()!;
      if (i % 2 === 0) last = last.toLowerCase();
      else last = last.toUpperCase();
      return [...result, last].join(" ");
    }
    // console.log(i, words.length);
    // console.log(words.join(" "));

    const currPair = words.splice(0, 2); // [wall, them]
    // console.log(currPair.join(" "), "+", words.join(" "));

    if (currPair[0].length === currPair[1].length) {
      if (i % 2 === 0) result.push(currPair[0].toLowerCase());
      else result.push(currPair[0].toUpperCase());

      words.unshift(currPair[1]);
      i++;
      continue;
    }

    let [shorter, longer] = [...currPair].sort((a, b) => a.length - b.length);
    // console.log("sortedPair:", shorter, longer);

    if (i % 2 === 0) {
      result.push(shorter.toLowerCase());
      words.unshift(longer);
    } else {
      result.push(longer.toUpperCase());
      words.unshift(shorter);
    }

    i++;
    // console.log("--------------------");
  }

  return result.join(" ");
}

// arrange("who hit retaining The That a we taken");
