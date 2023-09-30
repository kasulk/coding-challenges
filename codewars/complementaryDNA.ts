export class Kata {
  static dnaStrand(dna: string): string {
    // loop through letters of input
    // create a (object) map with all 4 letters
    // for every letter of the input, look into the map and switch the letter accordingly
    // add every new letter to the output string

    type Map = { [letter: string]: string };

    const map: Map = {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    };

    const output: string = dna
      .split("")
      .map((element) => (element = map[element]))
      .join("");

    return output;
  }
}
