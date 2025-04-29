function createArrayOfTiers(num) {
  const strDigits = [...num.toString()];

  return strDigits.reduce((tiers, _, i) => {
    const curr = strDigits.slice(0, i + 1).join("");
    return [...tiers, curr];
  }, []);
}
