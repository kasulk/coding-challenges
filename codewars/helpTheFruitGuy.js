function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map((fruit) => fruit.replace("rotten", "").toLowerCase())
    : [];
}
