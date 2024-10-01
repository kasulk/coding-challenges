function hydrate(drinksStr) {
  const numGlasses = drinksStr
    .split(" ")
    .filter((el) => Number(el))
    .reduce((sum, strNum) => sum + Number(strNum), 0);

  const glasses = `glass${numGlasses === 1 ? "" : "es"}`;

  return `${numGlasses} ${glasses} of water`;
}
