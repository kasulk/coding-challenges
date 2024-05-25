function divCon(arr) {
  return arr.reduce(
    (sum, num) => (typeof num === "number" ? sum + num : sum - num),
    0
  );
}
