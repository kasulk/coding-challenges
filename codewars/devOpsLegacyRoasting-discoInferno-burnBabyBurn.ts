export function roastLegacy(workloads: string): string {
  // create a list with all complaints
  // create a map for the points to earn for a legacy burn
  // for each complain, check how often it occurs in the input string
  /// increase a complaints counter by the number of times it is found
  // for each legacy, check how often it occurs in the input string
  /// multiply the corresponding points by the number of occurrences
  /// increase a points counter by the points earned
  // if there's been a complaint or a roasting, return 'Burn baby burn...' with the results of the counters
  // else return 'These guys...'

  const complaints: string[] = [
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
  let burnedLegaciesPoints = 0;

  complaints.forEach((complaint) => {
    const complaintRegex = new RegExp(complaint, "gi");

    complaintsCount += workloads.match(complaintRegex)?.length || 0;
  });

  for (let legacy in legacies) {
    const legacyRegex = new RegExp(legacy, "gi");

    burnedLegaciesPoints +=
      legacies[legacy] * (workloads.match(legacyRegex)?.length || 0);
  }

  return complaintsCount || burnedLegaciesPoints
    ? `Burn baby burn disco inferno ${burnedLegaciesPoints} points earned in this roasting and ${complaintsCount} complaints resolved!`
    : "These guys are already DevOps and in the Cloud and the business is happy!";
}
