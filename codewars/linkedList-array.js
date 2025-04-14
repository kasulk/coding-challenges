function listToArray(list) {
  const arr = [];
  let next = list;

  while (next) {
    arr.push(next.value);
    next = next.next;
  }

  return arr;
}
