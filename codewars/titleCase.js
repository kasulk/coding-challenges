function titleCase(title, minorWords) {
  if (!title) return title;
  const words = title.toLowerCase().split(" ");

  if (!minorWords) return words.map((word) => capitalize(word)).join(" ");
  const minorWordsArr = minorWords.toLowerCase().split(" ");

  return words
    .map((word, i) => {
      if (i && minorWordsArr.includes(word)) return word;
      return capitalize(word);
    })
    .join(" ");
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
