function snail(arrays) {
  const result = [];

  while (arrays.length) {
    const currFirstRow = arrays.shift();
    if (!currFirstRow) break;
    result.push(currFirstRow);

    const currLastRow = arrays.pop();
    if (!currLastRow) break;

    // add middle rows last elements
    for (let i = 0; i < arrays.length; i++) {
      const currMiddleRow = arrays[i];
      const currLast = currMiddleRow.pop();
      result.push(currLast);
    }

    result.push(currLastRow.reverse());

    // add middle rows first elements
    for (let i = 0; i < arrays.length; i++) {
      const currMiddleRow = arrays[arrays.length - 1 - i];
      const currFirst = currMiddleRow.shift();
      result.push(currFirst);
    }
  }

  return result.flat();
}
