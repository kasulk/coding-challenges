export function hello(name = ""): string {
  if (name) {
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
  }

  return `Hello, World!`;
}
