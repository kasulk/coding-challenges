function solution(str) {
  let result = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);

    if (pair.length === 2) result.push(pair);
    else result.push(pair + "_");
  }

  return result;
}
