export const stockList = (
  listOfBooks: string[],
  listOfCats: string[]
): string => {
  if (!listOfBooks.length || !listOfCats.length) return "";

  const foundBookCats: [string, number][] = [];

  for (let book of listOfBooks) {
    // if there are books in listOfBooks that begin with the corresponding category
    if (listOfCats.includes(book[0])) {
      // push an array with the first letter and the quantity as elements to an array
      foundBookCats.push([book[0], Number(book.split(" ")[1])]); // e.g. [['A',20], ...]
    }
  }

  // create the results array and add each category from the input and sum = 0 as elements
  const catsResults: [string, number][] = listOfCats.map((category) => [
    category,
    0,
  ]); // e.g. [["A", 0], ...];

  for (let foundBookCat of foundBookCats) {
    // grab each category
    const foundCat = catsResults.find(
      (catResult) => catResult[0] === foundBookCat[0]
    );
    // and add the amount of books to it
    if (foundCat) {
      foundCat[1] += foundBookCat[1];
    }
    // if the category is not on the list, ignore it
  }

  return `(${catsResults
    .map((catResult) => catResult.join(" : "))
    .join(") - (")})`;
};
