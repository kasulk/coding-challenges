export function rakeGarden(garden: string): string {
  // turn string into array of single words
  // map throug array
  // return everything that is gravel or rock
  // else return gravel
  // turn array back to string and return it

  return garden
    .split(" ")
    .map((word) => (word === "gravel" || word === "rock" ? word : "gravel"))
    .join(" ");
}
