function search(budget, prices) {
  return prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(",");
}
