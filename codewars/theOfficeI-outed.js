function outed(meet, boss) {
  const coworkers = Object.entries(meet);
  const numPeople = coworkers.length;

  const score = coworkers.reduce(
    (acc, [coworker, mood]) =>
      coworker === boss ? acc + mood * 2 : acc + mood,
    0
  );

  return score / numPeople <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
