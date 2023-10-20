export function anchorize(text: string): string {
  // for half an hour try to figure out what is actually required here...
  // split input string by ' ' and loop through resulting array
  // if the element contains a '://'
  // replace the element with a corresponding html anchor tag
  // return the rejoined result

  return text
    .split(" ")
    .map((str) => (str.includes("://") ? `<a href="${str}">${str}</a>` : str))
    .join(" ");
}
