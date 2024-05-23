function greet(name) {
  return `Hello ${capitalize(name)}!`;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
