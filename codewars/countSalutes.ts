export function countSalutes(hallway: String): number {
  const people = hallway.replace(/-/g, "").split("");

  return people
    .map((person, i) => {
      const restOfPeople = people.slice(i);

      if (person === ">") {
        return restOfPeople.filter((person) => person === "<").length * 2;
      }
      return 0;
    })
    .reduce((sum, curr) => sum + curr, 0);
}
