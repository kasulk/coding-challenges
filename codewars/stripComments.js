function solution(text, markers) {
  return text
    .split("\n")
    .map((line) => {
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (markers.includes(char)) return line.slice(0, i).trimEnd();
      }
      return line.trimEnd();
    })
    .join("\n");
}
