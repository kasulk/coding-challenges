function alphabetWar(fight) {
  const pointsMap = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    z: 1,
    d: 2,
    q: 3,
    m: 4,
  };

  const result = fight
    .split("")
    .reduce((sum, letter) => sum + (pointsMap[letter] || 0), 0);

  if (result > 0) return "Right side wins!";
  if (result < 0) return "Left side wins!";
  return "Let's fight again!";
}
