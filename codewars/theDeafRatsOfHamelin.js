function countDeafRats(town) {
  let numDeafRats = 0;

  const [leftRats, rightRats] = town.replace(/[\s]/g, "").split("P");
  const leftSpacedRats = spacifyRats(leftRats);
  const rightSpacedRats = spacifyRats(rightRats);

  numDeafRats += (leftSpacedRats.match(/O~/g) || []).length;
  numDeafRats += (rightSpacedRats.match(/~O/g) || []).length;

  return numDeafRats;
}

function spacifyRats(rats) {
  const spacedRats = [];

  for (let i = 0; i < rats.length; i += 2) {
    spacedRats.push(rats[i] + rats[i + 1]);
  }

  return spacedRats.join(" ");
}
