function one(arr, fun) {
  return arr.reduce((acc, curr) => (fun(curr) ? ++acc : acc), 0) === 1;
}
