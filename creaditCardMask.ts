// return masked string
export function maskify(cc: string): string {
  // if length of input is > 4
  // reduce its length by 4
  // replace every remaining character of length reduced string with '#'
  // add last 4 characters of input string to end of output string and return it
  // else return input string

  if (cc.length > 4) {
    return (
      cc
        .substring(4)
        .split("")
        .map((character) => "#")
        .join("") + cc.substring(cc.length - 4)
    );
  }
  return cc;
}
