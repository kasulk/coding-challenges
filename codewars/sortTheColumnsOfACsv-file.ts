export function sortCsvColumns(csvFileContent: string): string {
  const rows = csvFileContent.split("\n").map((row) => row.split(";"));

  const columns = rowsToCols(rows);
  const sortedCols = columns.sort((a, b) => a[0].localeCompare(b[0]));

  const newRows = rowsToCols(sortedCols);

  return newRows.map((row) => row.join(";")).join("\n");
}

function rowsToCols(arrs: string[][]): string[][] {
  const numCols = arrs[0].length;
  const columns: string[][] = [];

  for (let i = 0; i < numCols; i++) {
    const column: string[] = [];

    for (let j = 0; j < arrs.length; j++) {
      column.push(arrs[j][i]);
    }
    columns.push(column);
  }

  return columns;
}
