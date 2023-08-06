export class Kata {
  static getCount(str: string): number {
    // turn input into array
    // filter each element which is included in vowel list
    // return length of filter result

    return str.split("").filter((character) => "aeiou".includes(character))
      .length;
  }
}
