function searchNames(logins) {
  return logins.filter(([name]) => name.endsWith("_"));
}
