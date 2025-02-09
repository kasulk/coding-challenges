function pattern(num) {
  return Array(num)
    .fill("")
    .map((_, i) => {
      const asterisks = "*".repeat(i);
      const endingNum = i + 1;
      return i ? "1" + asterisks + endingNum : "1";
    })
    .join("\n");
}
