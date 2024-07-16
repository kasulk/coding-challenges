function dup(strs) {
  return strs.map((str) =>
    str
      .split("")
      .map((char, i) => {
        const prevChar = str[i - 1];
        if (char === prevChar) return "";
        return char;
      })
      .filter((char) => char)
      .join("")
  );
}
