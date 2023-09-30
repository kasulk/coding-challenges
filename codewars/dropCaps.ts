export function dropCap(s: string): string {
  // create a variable nextWord and set it to true
  // loop through string
  // if the character is a letter (and the next 2 after that are not a space)
  // turn the character into uppercase
  // switch newWord to false
  // turn the next characters into lowercase, until a space
  // if there is a space, set newWord to true

  // if newWord
  // make the first letter uppercase
  // turn newWord to false (until next space)

  console.log(s);

  if (s.length <= 2) return s;

  let newWord = true;
  let result = "";
  const regEx = new RegExp(/[a-zA-Z]{3}/);

  for (let i = 0; i < s.length; i++) {
    if (newWord) {
      if (regEx.test(s.substring(i, i + 3))) {
        //   console.log(s.substring(i,i+3))
        result += s[i].toUpperCase();
        newWord = false;
        //   continue;
      }
    }
    result += s[i].toLowerCase();

    if (s[i] === " ") newWord = true;
  }

  return result;
}
