export function buildString(...template: string[]): string {
  return `I like ${template.join(", ")}!`;
}
