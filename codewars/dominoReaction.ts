export function dominoReaction(dominos: string): string {
  const result: string[] = [];

  for (let i = 0; i < dominos.length; i++) {
    const curr = dominos[i];

    if (curr === "|") {
      result.push("/");
      continue;
    }

    result.push(...dominos.slice(i));
    break;
  }

  return result.join("");
}
