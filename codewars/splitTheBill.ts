type People = { [person: string]: number };

export function splitTheBill(people: People): People {
  // sum up all values, and divide them by the amount of people
  // for each person
  // from this equal share, subtract the amount paid
  // reassign this value to each person

  let billSum = 0;
  const peopleBalanced: People = {};

  for (let person in people) {
    billSum += people[person];
  }

  const equalShare = billSum / Object.keys(people).length;

  for (let person in people) {
    peopleBalanced[person] = Number((people[person] - equalShare).toFixed(2));
  }

  return peopleBalanced;
}
