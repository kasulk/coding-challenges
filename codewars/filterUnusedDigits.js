function unusedDigits(...nums) {
  const presentDigits = [...new Set(nums)].join("").toString();

  return "0123456789"
    .split("")
    .filter((num) => !presentDigits.includes(num))
    .join("");
}
