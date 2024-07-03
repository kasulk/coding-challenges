export function sortCsvColumns(csvFileContent: string): string {
  const rows = csvFileContent.split("\n").map((row) => row.split(";"));

  const columns = rowsToCols(rows);
  const sortedCols = columns.sort((a, b) => a[0].localeCompare(b[0]));
  const newRows = rowsToCols(sortedCols);

  return newRows.map((row) => row.join(";")).join("\n");
}

function rowsToCols(arrs: string[][]): string[][] {
  const columns: string[][] = [];

  arrs[0].forEach((_, i) => {
    const column: string[] = [];

    arrs.forEach((_, j) => column.push(arrs[j][i]));

    columns.push(column);
  });

  return columns;
}
