function consonantCount(str) {
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
  return consonants.length;
}
