function vaporcode(str) {
  return str.replace(/[\s]/g, "").toUpperCase().split("").join("  ");
}
