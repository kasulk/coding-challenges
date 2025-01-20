function countLanguages(devs) {
  return devs.reduce((langCounts, currDev) => {
    const lang = currDev.language;
    if (!langCounts[lang]) langCounts[lang] = 0;
    langCounts[lang]++;
    return langCounts;
  }, {});
}
