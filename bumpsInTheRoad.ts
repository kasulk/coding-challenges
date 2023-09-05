export function bump(x: string): string {
  // remove underscores
  // if remaining length of the string is <= 15, return 'Woohoo!'
  // else 'Car Dead'

  return x.replace(/_/g, "").length <= 15 ? "Woohoo!" : "Car Dead";
}
