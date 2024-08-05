function domainName(url) {
  return url
    .split("/")
    .filter((str) => str.includes("."))[0]
    .split(".")
    .sort((a, b) => b.length - a.length)[0];
}
