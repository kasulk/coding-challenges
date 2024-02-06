function sortAnimal(animals) {
  return [...animals].sort((a, b) => {
    if (a.numberOfLegs < b.numberOfLegs) {
      return -1;
    }
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name.localeCompare(b.name);
    }
  });
}
