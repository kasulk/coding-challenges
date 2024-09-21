function crap(garden, bags, cap) {
  const flatGarden = garden.flat();

  if (flatGarden.includes("D")) return "Dog!!";

  const totalCrapCap = bags * cap;
  const numCraps = flatGarden.filter((spot) => spot === "@").length;

  if (totalCrapCap >= numCraps) return "Clean";
  return "Cr@p";
}
