export function solve(str: string): string {
  const result: string[] = [];

  const resolvedBackspaces = resolveMultipleBackspaces(str);
  const backspacesReplaced = resolvedBackspaces.replace(/\[backspace]/g, "#");

  for (const char of backspacesReplaced) {
    if (char === "#") result.pop();
    else result.push(char);
  }

  return result.join("");
}

function resolveMultipleBackspaces(str: string): string {
  return str.replace(/\[backspace]\*\d+/g, (match) => {
    const num = Number(match.split("*")[1]);
    return "[backspace]".repeat(num);
  });
}
