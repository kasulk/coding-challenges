function pattern(num) {
  return Array(num)
    .fill("")
    .map((_, i) => {
      const endingNum = i ? i + 1 : "";
      return "1" + "*".repeat(i) + endingNum;
    })
    .join("\n");
}
