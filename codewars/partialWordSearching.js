function wordSearch(query, words) {
  const queryLo = query.toLowerCase();
  const results = words.filter((word) => word.toLowerCase().includes(queryLo));
  return results.length ? results : ["Empty"];
}
