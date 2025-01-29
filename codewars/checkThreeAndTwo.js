function checkThreeAndTwo(strs) {
  const first = strs.filter((str) => str === strs[0]);
  const rest = strs.filter((str) => str !== strs[0]);
  const second = strs.filter((str) => str === rest[0]);
  return (
    first.length > 1 && first.length < 4 && first.length + second.length === 5
  );
}
