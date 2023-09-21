export function revRot(str: string, size: number): string {
  // loop through input string str/size times
  // cut the string into the chunks (store it in a variable)
  // convert the chunk into an array of numbers
  // reduce the array of numbers to the sum of the cubes of the numbers
  // if it is divisible by 2, reverse the chunk (stored in the variable)
  // else, move its first element to its end
  // concatenate it to an output variable and return the output

  if (!str || size <= 0) return "";

  let output = "";

  for (let i = 0; i < str.length; i += size) {
    const chunk = str.substring(i, i + size);

    if (chunk.length < size) break;

    output += modifyChunk(chunk);
  }

  return output;
}

function modifyChunk(chunk: string): string {
  const chunkDigits = chunk.split("");

  const chunksSumOfDigitsCubes = chunkDigits
    .map(Number)
    .reduce((sum, digit) => sum + digit ** 3);

  if (chunksSumOfDigitsCubes % 2 === 0) {
    return chunkDigits.reverse().join("");
  }
  return chunk.substring(1) + chunk[0];
}
