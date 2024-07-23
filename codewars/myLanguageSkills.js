function myLanguages(results) {
  return Object.entries(results)
    .slice()
    .filter(([_, points]) => points >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(([lang, _]) => lang);
}
