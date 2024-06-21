function snail(arrays) {
  const result = [];

  while (arrays.length) {
    const currFirstRow = arrays.shift();
    if (!currFirstRow) break;
    result.push(currFirstRow);

    const currLastRow = arrays.pop();
    if (!currLastRow) break;

    let j = 0;
    // get middle rows lasts
    while (j < arrays.length) {
      const currMiddleRow = arrays[j];
      const currMiddleRowsLast = currMiddleRow.pop();
      result.push(currMiddleRowsLast);
      j++;
    }
    result.push(currLastRow.reverse());

    let k = 0;
    // get middle rows firsts
    while (k < arrays.length) {
      const currMiddleRow = arrays[arrays.length - 1 - k];
      const currMiddleRowsFirst = currMiddleRow.shift();
      result.push(currMiddleRowsFirst);
      k++;
    }
  }

  return result.flat();
}
