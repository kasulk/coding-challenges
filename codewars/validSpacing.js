function validSpacing(str) {
  return str.length === str.trim().replace(/\s{2,}/, " ").length;
}
