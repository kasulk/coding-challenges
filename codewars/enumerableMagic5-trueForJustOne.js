function one(arr, fun) {
  let numTrues = 0;

  for (const element of arr) {
    if (fun(element)) numTrues++;
  }

  return numTrues === 1;
}
