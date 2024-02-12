export function bestFriend(txt: string, a: string, b: string): boolean {
  for (let i = 0; i < txt.length; i++) {
    const curr = txt[i];
    const next = txt[i + 1];

    if (curr === a && next !== b) return false;
  }

  return true;
}
