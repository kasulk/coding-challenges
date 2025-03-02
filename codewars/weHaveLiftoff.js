function liftoff(nums) {
  const sortedStrNums = [...nums]
    .sort((a, b) => b - a)
    .map(String)
    .join(" ");

  return sortedStrNums + " liftoff!";
}
