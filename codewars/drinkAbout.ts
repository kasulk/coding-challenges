export function peopleWithAgeDrink(age: number): string {
  if (age < 14) return "drink toddy";
  if (age < 18) return "drink coke";
  if (age < 21) return "drink beer";
  return "drink whisky";
}
