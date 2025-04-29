function createArrayOfTiers(num) {
  return [...num.toString()].reduce((tiers, _, i, nums) => {
    const curr = nums.slice(0, i + 1).join("");
    return [...tiers, curr];
  }, []);
}
