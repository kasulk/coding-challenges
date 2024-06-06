function uniqueInOrder(iterable) {
  return [...iterable].reduce((acc, curr, i, arr) => {
    const last = arr[i - 1];
    if (curr !== last) acc.push(curr);
    return acc;
  }, []);
}
