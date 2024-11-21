function capitalize(str, nums) {
  let chars = [...str];

  for (const num of nums) {
    if (chars[num]) chars[num] = chars[num].toUpperCase();
  }

  return chars.join("");
}
