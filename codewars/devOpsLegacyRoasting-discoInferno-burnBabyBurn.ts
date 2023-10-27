export function roastLegacy(workloads: string): string {
  // create a map for the points to earn for a legacy burn
  // create a list with all complaints
  // for each complain, check if it is in the input string
  // if the input string contains a complain (or '!'), increase a complains counter by 1
  // for each legacy, check if it is in the input string
  // if the input string contains a legacy, increase another counter by the points earned
  // if there is no complain and no roasting, return 'These guys...'
  // else 'Burn baby burn...'

  console.log(workloads);

  const complaints = [
    "slow!",
    "expensive!",
    "manual!",
    "down!",
    "hostage!",
    "security!",
  ];

  const legacies: { [legacy: string]: number } = {
    COBOL: 1000,
    nonobject: 500,
    monolithic: 500,
    fax: 100,
    modem: 100,
    thickclient: 50,
    tape: 50,
    floppy: 50,
    oldschoolIT: 50,
  };

  let complaintsCount = 0;
  let burnedLegacyPoints = 0;

  complaints.forEach((complaint) => {
    const regex = new RegExp(complaint, "gi");

    complaintsCount += workloads.match(regex)?.length || 0;
  });

  for (let legacy in legacies) {
    const regex = new RegExp(legacy, "gi");

    burnedLegacyPoints +=
      legacies[legacy] * (workloads.match(regex)?.length || 0);
  }

  console.log(burnedLegacyPoints, complaintsCount);

  //   if (!complaintsCount && !burnedLegacyPoints) {
  // return "These guys are already DevOps and in the Cloud and the business is happy!";
  //   }

  //   return `Burn baby burn disco inferno ${burnedLegacyPoints} points earned in this roasting and ${complaintsCount} complaints resolved!`;

  return complaintsCount || burnedLegacyPoints
    ? `Burn baby burn disco inferno ${burnedLegacyPoints} points earned in this roasting and ${complaintsCount} complaints resolved!`
    : "These guys are already DevOps and in the Cloud and the business is happy!";
}
