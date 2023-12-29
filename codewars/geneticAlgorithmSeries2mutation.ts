export function mutate(chromosome: string, p: number): string {
  let output = "";

  for (let i = 0; i < chromosome.length; i++) {
    if (i < chromosome.length * p) {
      if (chromosome[i] === "1") output += "0";
      else output += "1";
      continue;
    }

    output += chromosome[i];
  }

  return output;
}
