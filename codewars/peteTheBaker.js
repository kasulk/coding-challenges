function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (let ingredient in recipe) {
    const currMax = available[ingredient] / recipe[ingredient] || 0;
    if (currMax < maxCakes) maxCakes = currMax;
  }

  return Math.trunc(maxCakes);
}
