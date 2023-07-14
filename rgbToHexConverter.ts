export function rgb(r: number, g: number, b: number): string {
  // first char is 1-16, second 17-32 (x + y)
  //
  // create a map object (13: D, 15: F ...)
  // num / 16 = first char
  // num % 16 = secon char
  // create the hex code for each color
  // concatenate and return string

  type hexMap = { [quotient: number]: string };

  let outputHex = "";
  const rgb = [r, g, b];

  const hexMap: hexMap = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  for (let color of rgb) {
    if (color > 255) {
      color = 255;
    }
    if (color < 0) {
      color = 0;
    }

    // let firstChar = Math.floor(color / 16);
    // let secondChar = Math.floor(color % 16);

    const hexChars = [Math.floor(color / 16), Math.floor(color % 16)];

    for (let char of hexChars) {
      if (char > 9) {
        outputHex += map[char];
      } else {
        outputHex += char;
      }
    }

    //     if (firstChar > 9) {
    //       outputHex += map[firstChar];
    //     } else {
    //       outputHex += firstChar;
    //     }
    //     if (secondChar > 9) {
    //       outputHex += map[secondChar];
    //     } else {
    //       outputHex += secondChar;
    //     }
  }

  return outputHex;
}
