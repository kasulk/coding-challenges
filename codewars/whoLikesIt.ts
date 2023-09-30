export function likes(people: string[]): string {
  // check length of the array
  // if length is 0 or 1, output2 is 'likes this'
  // if length is >1, output2 is 'like this'
  //
  // if length is 0, output1 is 'no one'
  // if length is >0 and <=3, output1 is item1 to item_lengthOfArr-1
  // if length is >3, output1 is item1, item2 'and x others'
  // x is length-2

  const numberOfLikes = people.length;
  let outputEnd = "like this";
  let output = "";

  switch (numberOfLikes) {
    case 0:
    case 1:
      outputEnd = "likes this";
      break;
  }
  switch (numberOfLikes) {
    case 0:
      output = `no one ${outputEnd}`;
      break;
    case 1:
      output = `${people[0]} ${outputEnd}`;
      break;
    case 2:
      output = `${people[0]} and ${people[1]} ${outputEnd}`;
      break;
    case 3:
      output = `${people[0]}, ${people[1]} and ${people[2]} ${outputEnd}`;
      break;
    default:
      output = `${people[0]}, ${people[1]} and ${
        people.length - 2
      } others ${outputEnd}`;
  }
  return output;

  //! shorter:
  //   switch (people.length) {
  //     case 0:
  //       return `no one likes this`;
  //     case 1:
  //       return `${people[0]} likes this`;
  //     case 2:
  //       return `${people[0]} and ${people[1]} like this`;
  //     case 3:
  //       return `${people[0]}, ${people[1]} and ${people[2]} like this`;
  //     default:
  //       return `${people[0]}, ${people[1]} and ${
  //         people.length - 2
  //       } others like this`;
  //   }
}
