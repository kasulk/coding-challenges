export function send(text: string): string {
  const binary = binarizeStr(text);
  const unary = unarizeBinary(binary);
  return unary;
}

export function receive(unary: string): string {
  const binary = binarizeUnary(unary);
  const chars = charifyBinary(binary);
  return chars;
}

function binarizeStr(str: string): string {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(7, "0"))
    .join("");
}

function unarizeBinary(binary: string): string {
  let unary = "";
  let bitGroup = "";

  binary.split("").forEach((bit, i, arr) => {
    const prev = arr[i - 1];
    if (prev && bit !== prev) {
      unary += unarizeBitGroup(bitGroup) + " ";
      bitGroup = "";
    }

    bitGroup += bit;
  });

  return (unary += unarizeBitGroup(bitGroup));
}

function unarizeBitGroup(bitGroup: string): string {
  const first = bitGroup[0] === "1" ? "0" : "00";
  const second = "0".repeat(bitGroup.length);
  return `${first} ${second}`;
}

function binarizeUnary(unary: string): string {
  return unary.split(" ").reduce((acc, curr, i, arr) => {
    const prev = arr[i - 1];
    const bit = prev === "0" ? "1" : "0";
    return isOdd(i) ? (acc += bit.repeat(curr.length)) : acc;
  }, "");
}

function charifyBinary(binary: string): string {
  let chars = "";
  for (let i = 0; i < binary.length; i += 7) {
    const currBinary = binary.slice(i, i + 7);
    const charCode = parseInt(currBinary, 2);
    chars += String.fromCharCode(charCode);
  }
  return chars;
}

function isOdd(num: number): boolean {
  return num % 2 !== 0;
}
