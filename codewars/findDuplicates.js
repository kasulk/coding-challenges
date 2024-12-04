function duplicates(arr) {
  const duplicates = [];
  const checked = [];

  for (element of arr) {
    if (duplicates.includes(element)) continue;
    if (checked.includes(element)) duplicates.push(element);
    else checked.push(element);
  }

  return duplicates;
}
