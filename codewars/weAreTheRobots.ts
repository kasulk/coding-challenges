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
  let bla = {
    automatik: 0,
    mechanik: 0,
  };
  let foundRobotsCounts;
  //   const robotRegEx = /[a-z]\W\W0\W\W0\W\W[a-z]/gi;
  const robotRegEx = /[a-z][^\w\s]{2}0[^\w\s]{2}0[^\w\s]{2}[a-z]/gi;

  if (!a.length) foundRobotsCounts = [0, 0];
  else {
    a.forEach((element) => {
      //   element.match(robotRegEx) && /automatik|mechanik/i.test(element)
      //     ? element.match(robotRegEx)?.length
      //     : 0
      if (element.match(robotRegEx) && /automatik/i.test(element))
        bla.automatik = element.match(robotRegEx)?.length!;
      if (element.match(robotRegEx) && /mechanik/i.test(element))
        bla.mechanik = element.match(robotRegEx)?.length!;
    });
  }

  //   console.log("foundRobotsCounts:", foundRobotsCounts);
  console.log("bla:", bla);

  const output = [
    // `${foundRobotsCounts[0]} robots functioning automatik`,
    // `${foundRobotsCounts[1]} robots dancing mechanik`,
    `${bla.automatik} robots functioning automatik`,
    `${bla.mechanik} robots dancing mechanik`,
  ];
  console.log("output:", output);
  console.log("------------------------");

  return output;
}
