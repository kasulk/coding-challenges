export function rot(str: string): string {
  return str
    .split("\n")
    .reverse()
    .map((line) => [...line].reverse().join(""))
    .join("\n");
}

export function selfieAndRot(str: string): string {
  const firstLine = str.slice(0, str.indexOf("\n"));
  const dots = ".".repeat(firstLine.length);

  return (
    str.replace(/[\n]/g, dots + "\n") +
    dots +
    "\n" +
    dots +
    rot(str).replace(/[\n]/g, "\n" + dots)
  );
}

export function oper(fn: (str: string) => string, str: string): string {
  return fn(str);
}
