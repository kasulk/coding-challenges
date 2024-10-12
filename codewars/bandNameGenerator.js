function bandNameGenerator(name) {
  const firstChar = name[0];
  const capitalizedName = firstChar.toUpperCase() + name.slice(1);

  if (name.endsWith(firstChar)) return capitalizedName + name.slice(1);
  return `The ${capitalizedName}`;
}
