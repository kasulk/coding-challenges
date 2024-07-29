function countDeafRats(town) {
  console.log("town:", town);

  const isFirstPiedPiper = town[0] === "P";
  const isLastPiedPiper = town.slice(-1) === "P";
  const isMiddlePiedPiper = !isFirstPiedPiper && !isLastPiedPiper;

  const rats = town.replace(/[P\s]/g, "");
  const spacedRats = spacifyRats(rats);

  let numDeafRats = 0;

  if (isFirstPiedPiper) return (spacedRats.match(/~O/g) || []).length;
  if (isLastPiedPiper) return (spacedRats.match(/O~/g) || []).length;

  if (isMiddlePiedPiper) {
    const [left, right] = town.replace(/[\s]/g, "").split("P");
    const leftSpacedRats = spacifyRats(left);
    const rightSpacedRats = spacifyRats(right);
    numDeafRats += (leftSpacedRats.match(/O~/g) || []).length;
    numDeafRats += (rightSpacedRats.match(/~O/g) || []).length;
  }
  return numDeafRats;
}

function spacifyRats(rats) {
  let temp = [];
  for (let i = 0; i < rats.length; i += 2) {
    temp.push(rats[i] + rats[i + 1]);
  }

  return temp.join(" ");
}

// const blub = "~OP"; //!0
// const blub = 'OP~' //!0
// const blub = "O~~OO~~OO~~OO~P~OO~~OO~~OO~~O"; //!8
// const blub = "         P"; //!0
// const blub = "P"; //!0
// const blub = "~O~O~O~O~O~O~O~O~O~O~O  ~O~O~O~O~O~O~O  ~O~OO~~O~O~O~OP"; //!1
// countDeafRats(blub);

// countDeafRats("~O~O~O~O P"); // 0
// countDeafRats("P O~ O~ ~O O~"); // 1);
// countDeafRats("~O~O~O~OP~O~OO~"); // 2);
