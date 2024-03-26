export function trilingualDemocracy(group: string): string {
  const languages = ["D", "F", "I", "K"];

  const sortedGroup = [...group].sort();
  const groupSet = [...new Set(group)];

  if (groupSet.length === 3) {
    return languages.filter((language) => !group.includes(language))[0];
  }

  if (groupSet.length === 2) {
    if (sortedGroup[0] === sortedGroup[1]) return sortedGroup[2];
  }

  return sortedGroup[0];
}
