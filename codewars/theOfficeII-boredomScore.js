function boredom(staff) {
  const departmentScores = {
    "accounts": 1,
    "finance": 2,
    "regulation": 3,
    "cleaning": 4,
    "retail": 5,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "canteen": 10,
    "pissing about": 25,
  };

  const teamScore = Object.values(staff).reduce(
    (accScores, currDepartment) => accScores + departmentScores[currDepartment],
    0
  );

  if (teamScore >= 100) return "party time!!";
  if (teamScore > 80) return "i can handle this";
  return "kill me now";
}
