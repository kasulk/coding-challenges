function counterEffect(hitCount) {
  return hitCount
    .split("")
    .map(Number)
    .reduce((acc, currDigit) => {
      const currArr = Array(currDigit + 1)
        .fill(0)
        .map((_, i) => i);
      return [...acc, currArr];
    }, []);
}
