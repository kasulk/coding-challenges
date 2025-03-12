function ownedCatAndDog(catYears, dogYears) {
  let ownedCat = 0;
  let ownedDog = 0;

  let catYearsLeft = catYears;
  let dogYearsLeft = dogYears;

  const dict = {
    0: 15,
    1: 9,
  };

  while (catYearsLeft > 0) {
    const currYears = dict[ownedCat] || 4;
    if (currYears > catYearsLeft) break;
    catYearsLeft -= currYears;
    ownedCat++;
  }

  while (dogYearsLeft > 0) {
    const currYears = dict[ownedDog] || 5;
    if (currYears > dogYearsLeft) break;
    dogYearsLeft -= currYears;
    ownedDog++;
  }

  return [ownedCat, ownedDog];
}
