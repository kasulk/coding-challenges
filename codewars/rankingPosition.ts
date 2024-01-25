export type inputMan = {
  name: string;
  points: number;
};

export type outputMan = {
  name: string;
  points: number;
  position: number;
};

export function ranking(people: inputMan[]): outputMan[] {
  // sort array by people.points
  // if points are the same, sort by name
  // loop through sorted array
  // if the points of the current person are not equal to the previous persons points
  // set the position to i + 1
  // add the position key to each person

  let position = 1;

  const sortedPeople = [...people].sort((a, b) => {
    if (a.points === b.points) {
      return a.name.localeCompare(b.name);
    }
    return b.points - a.points;
  });

  return sortedPeople.map((person, i) => {
    const prevPerson = sortedPeople[i - 1];

    if (prevPerson) {
      if (person.points !== prevPerson.points) position = i + 1;
    }

    return { ...person, position };
  });
}
