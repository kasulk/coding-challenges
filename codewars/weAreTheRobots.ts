export function countRobots(strs: string[]): string[] {
  // create a counter object with automatik and mechanik as properties and 0 as values
  // create a regex search pattern for the robots
  // loop through the input string array, for each string
  // if it contains a valid robot and either the text 'automatik' or 'mechanik'
  // increase the corresponding counter in the counter object
  // return an array with values of the counter object

  const foundRobotsCounts = {
    automatik: 0,
    mechanik: 0,
  };

  const robotRegEx = /[a-z][^\w\s]{2}0[^\w\s]{2}0[^\w\s]{2}[a-z]/gi;

  strs.forEach((str) => {
    const foundRobots = str.match(robotRegEx);

    if (foundRobots && /automatik/i.test(str))
      foundRobotsCounts.automatik += foundRobots.length!;

    if (foundRobots && /mechanik/i.test(str))
      foundRobotsCounts.mechanik += foundRobots.length!;
  });

  return [
    `${foundRobotsCounts.automatik} robots functioning automatik`,
    `${foundRobotsCounts.mechanik} robots dancing mechanik`,
  ];
}
