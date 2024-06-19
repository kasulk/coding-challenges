function encrypt(str, n) {
  if (!str || n <= 0) return str;

  let odds;
  let evens;
  let result = str;

  for (let j = 0; j < n; j++) {
    odds = "";
    evens = "";
    for (let j = 0; j < result.length; j++) {
      const curr = result[j];
      if (j % 2 === 0) evens += curr;
      else odds += curr;
    }
    result = odds + evens;
  }
  return result;
}

function decrypt(str, n) {
  if (!str || n <= 0) return str;
  console.log("str,n:", str, n);

  //
  let result;
  let stepResult = str;

  for (let i = 0; i < n; i++) {
    result = "";
    for (let j = 0; j < str.length / 2; j++) {
      const firstIndex = Math.floor(str.length / 2) + j;
      result += stepResult[firstIndex];

      if (result.length === str.length) break;
      result += stepResult[j];
    }
    stepResult = result;
  }
  return stepResult;
}
