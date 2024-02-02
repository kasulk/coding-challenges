export function encodeCD(num: number): string {
  let output = "P";

  const binary8Bit = num.toString(2).padStart(8, "0");
  const bitsReversed = [...binary8Bit].reverse();

  bitsReversed.forEach((bit) => {
    const last = output.slice(-1);

    if (bit === "0") output += last;
    if (bit === "1" && last === "L") output += "P";
    if (bit === "1" && last === "P") output += "L";
  });

  return output;
}
