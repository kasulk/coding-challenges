function gordon(sentence) {
  return sentence
    .toUpperCase()
    .split(" ")
    .map((word) => word.replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!")
    .join(" ");
}
