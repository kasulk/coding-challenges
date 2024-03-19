export function encode(text: string): string {
  return [...text]
    .map((_, i) => {
      const ascii = text.charCodeAt(i);
      const binary8bit = ascii.toString(2).padStart(8, "0");

      return [...binary8bit].map((bit) => bit + bit + bit).join("");
    })
    .join("");
}

export function decode(bits: string): string {
  let fixedBits = "";

  for (let i = 0; i < bits.length; i += 3) {
    const groupOf3 = bits.slice(i, i + 3);
    const numZeros = groupOf3.replace(/[1]/g, "").length;
    let fixedBit = "";

    if (numZeros > 1) fixedBit = "0";
    else fixedBit = "1";

    if (i && i % 24 === 0) fixedBits += ",";

    fixedBits += fixedBit;
  }

  return fixedBits
    .split(",")
    .map((binary8bit) => {
      const ascii = parseInt(binary8bit, 2);
      const char = String.fromCharCode(ascii);
      return char;
    })
    .join("");
}
