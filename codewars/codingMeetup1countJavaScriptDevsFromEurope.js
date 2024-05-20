function countDevelopers(people) {
  return people.filter(
    ({ continent, language }) =>
      continent === "Europe" && language === "JavaScript"
  ).length;
}
