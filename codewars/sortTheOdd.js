function sortArray(nums) {
  const oddNums = [];
  const evenNums = nums.map((num) => {
    if (num % 2 === 0) return num;
    oddNums.push(num);
    return "x";
  });

  oddNums.sort((a, b) => a - b);

  return evenNums.map((element) =>
    element === "x" ? oddNums.shift() : element
  );
}
