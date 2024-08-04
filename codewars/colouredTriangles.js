function triangle(row) {
  const colors = "RGB";
  let currRow = row;
  let nextRow = "";

  while (currRow.length > 1) {
    for (let i = 0; i < currRow.length - 1; i++) {
      const curr = currRow[i];
      const next = currRow[i + 1];

      if (next === curr) nextRow += curr;
      else nextRow += colors.replace(curr, "").replace(next, "");
    }

    currRow = nextRow;
    nextRow = "";
  }

  return currRow;
}
