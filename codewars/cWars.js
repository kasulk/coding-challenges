function initials(fullName) {
  return fullName
    .split(" ")
    .map((name, i, names) =>
      i < names.length - 1 ? capitalize(name[0]) : capitalize(name)
    )
    .join(".");
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
