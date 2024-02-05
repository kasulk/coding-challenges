export function encode(str: string): string {
  let result = str[0] || "";

  for (let i = 0; i < str.length / 2; i++) {
    const currleft = str[str.length - 1 - i];
    const currright = str[i + 1];

    if (result.length < str.length) result += currleft;
    if (result.length < str.length) result += currright;
  }

  return result;
}

export function decode(str: string): string {
  const isEvenLength = str.length % 2 === 0;
  let result = "";

  for (let i = 0; i < str.length; i += 2) {
    const curr = str[i];
    result += curr;
  }

  if (isEvenLength) {
    for (let i = 0; i < str.length; i += 2) {
      const curr = str[str.length - 1 - i];
      result += curr;
    }
  }

  if (!isEvenLength) {
    for (let i = 0; i < str.length - 1; i += 2) {
      const curr = str[str.length - 2 - i];
      result += curr;
    }
  }

  return result;
}
