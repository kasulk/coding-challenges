function solve(eq) {
  // let result = "";
  const result = [];
  let num = "";

  for (let i = 0; i < eq.length; i++) {
    const curr = eq[i];
    if (/\d/.test(curr)) num += curr;
    else {
      // result = curr + num + result;
      result.unshift(curr, num);
      num = "";
    }
  }

  // if (num) result = num + result;
  if (num) result.unshift(num);

  return result.join("");
}
