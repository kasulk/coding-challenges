function removeConsecutiveDuplicates(str) {
  const result = [];

  str.split(" ").forEach((word) => {
    const prevWord = result.slice(-1)[0];
    if (word !== prevWord) result.push(word);
  });

  return result.join(" ");
}
