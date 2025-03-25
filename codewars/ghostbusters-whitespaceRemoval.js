function ghostBusters(building) {
  const buildingWithoutGhosts = building.replace(/\s/g, "");
  return buildingWithoutGhosts === building
    ? "You just wanted my autograph didn't you?"
    : buildingWithoutGhosts;
}
