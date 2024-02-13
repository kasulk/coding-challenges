export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      const charCode = Number(word.replace(/[a-z]/gi, ""));
      const restOfWord = word.replace(/[0-9]/g, "");
      const restLength = restOfWord.length;

      const first = String.fromCharCode(charCode);
      const second = restOfWord[restLength - 1] || "";
      const middle = restOfWord.slice(1, restLength - 1) || "";
      let last = "";

      if (restLength > 1) last = restOfWord[0];

      return first + second + middle + last;
    })
    .join(" ");
}
