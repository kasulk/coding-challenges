export const hasSurvived = (
  attackers: number[],
  defenders: number[]
): boolean => {
  // loop through longer array
  // if attacker is higher, increase attack survivor count
  // if defender is higher, increase defend survivor count
  // after the loop,
  // if both are the same,
  // compare the sums of both initial arrays
  // else return if more defenders have survived

  let numAttackSurvivors = 0;
  let numDefendSurvivors = 0;

  const mostSoldiers =
    attackers.length > defenders.length ? attackers : defenders;

  for (let i = 0; i < mostSoldiers.length; i++) {
    const currAttacker = attackers[i] || 0;
    const currDefender = defenders[i] || 0;

    if (currAttacker > currDefender) numAttackSurvivors++;
    if (currDefender > currAttacker) numDefendSurvivors++;
  }

  if (numAttackSurvivors === numDefendSurvivors) {
    const attackersInitialPower = attackers.reduce((sum, num) => sum + num, 0);
    const defendersInitialPower = defenders.reduce((sum, num) => sum + num, 0);

    return defendersInitialPower >= attackersInitialPower;
  }

  return numDefendSurvivors > numAttackSurvivors;
};
