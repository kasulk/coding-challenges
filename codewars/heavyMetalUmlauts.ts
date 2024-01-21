export function heavyMetalUmlauts(boringText: string): string {
  const map: { [key: string]: string } = {
    A: "Ä",
    E: "Ë",
    I: "Ï",
    O: "Ö",
    U: "Ü",
    Y: "Ÿ",
    a: "ä",
    e: "ë",
    i: "ï",
    o: "ö",
    u: "ü",
    y: "ÿ",
  };

  return [...boringText].map((char) => (map[char] ? map[char] : char)).join("");
}
