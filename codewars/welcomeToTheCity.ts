export const sayHello = (
  name: string[],
  city: string,
  state: string
): string => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
};
