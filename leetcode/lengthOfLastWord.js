/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // let sArr = s.split(" ");
  // let words = [];

  // for (element of sArr) {
  //   if (element != "") {
  //     words.push(element);
  //   }
  // }

  // return words[words.length - 1].length;

  let len = 0;
  let hasStarted = false;

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") hasStarted = true;
    if (hasStarted) {
      if (s[i] == " ") break;

      len++;
    }
  }

  return len;


};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));