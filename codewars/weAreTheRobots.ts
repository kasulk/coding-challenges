export function countRobots(a: string[]): string[] {
  // 2do: count how many elements in the input array contain
  // a functioning robot and the word automatik or
  // a functioning robot and the word mechanic
  //
  // loop through input array
  // for each element
  // count the valid robots in the string
  //
  console.log("input:", a);
  let foundRobotsCounts;
  const robotRegEx = /[a-z]\W\W0\W\W0\W\W[a-z]/gi;

  if (!a.length) foundRobotsCounts = [0, 0];
  else {
    foundRobotsCounts = a.map((element) =>
      element.match(robotRegEx) && /automatik|mechanik/i.test(element)
        ? element.match(robotRegEx)?.length
        : 0
    );
  }

  console.log("foundRobotsCounts:", foundRobotsCounts);

  const output = [
    `${foundRobotsCounts[0]} robots functioning automatik`,
    `${foundRobotsCounts[1]} robots dancing mechanik`,
  ];
  console.log("output:", output);
  console.log("------------------------");

  return output;
}
