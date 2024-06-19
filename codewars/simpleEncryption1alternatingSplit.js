function encrypt(str, n) {
  if (!str || n <= 0) return str;
  let result = str;

  for (let j = 0; j < n; j++) {
    let odds = "";
    let evens = "";

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
  let result = str;

  for (let i = 0; i < n; i++) {
    let stepResult = "";

    for (let j = 0; j < str.length / 2; j++) {
      const evensIndex = Math.floor(str.length / 2) + j;
      stepResult += result[evensIndex];

      if (stepResult.length === str.length) break;
      stepResult += result[j];
    }

    result = stepResult;
  }

  return result;
}
