function last(str) {
  return str
    .slice()
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .sort((a, b) => {
      if (b[0] > a[0]) return -1;
    })
    .map((word) => word.split("").reverse().join(""));
}
