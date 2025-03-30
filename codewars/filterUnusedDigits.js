function unusedDigits(...nums) {
  const presentDigits = [...new Set(nums)].join("");

  return "0123456789"
    .split("")
    .filter((num) => !presentDigits.includes(num))
    .join("");
}
