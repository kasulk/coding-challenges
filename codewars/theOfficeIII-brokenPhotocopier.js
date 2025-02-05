function broken(binary) {
  return binary
    .split("")
    .map((bit) => (bit === "0" ? "1" : "0"))
    .join("");
}
