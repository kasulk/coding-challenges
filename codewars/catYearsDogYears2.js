function ownedCatAndDog(catYears, dogYears) {
  const ownedCat = getOwnedPetYears(catYears, [15, 9, 4]);
  const ownedDog = getOwnedPetYears(dogYears, [15, 9, 5]);

  return [ownedCat, ownedDog];
}

function getOwnedPetYears(petYears, petYearsKey) {
  const petYearsDefaultKey = petYearsKey.pop();
  let petYearsLeft = petYears;
  let ownedPet = 0;

  while (petYearsLeft > 0) {
    const currYears = petYearsKey[ownedPet] || petYearsDefaultKey;
    if (currYears > petYearsLeft) break;
    petYearsLeft -= currYears;
    ownedPet++;
  }

  return ownedPet;
}
