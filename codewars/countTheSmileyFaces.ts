export function countSmileys(arr: string[]): number {
  // create regExp
  /// mandatory: : or ;
  /// optional (but only once): - or ~
  /// mandatory: ) or D
  // turn input array into a string
  // if a smiley matches the right facial parts, add it to an array
  // return the length of the array or 0

  const facialParts = new RegExp(/[:;][-~]{0,1}[)D]/g);

  return arr.join("").match(facialParts)?.length || 0;
}
