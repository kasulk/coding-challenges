export function generateChatRoomNames(users: string[]): string[] {
  const numsFirst: { [key: string]: number } = {};
  const numsFirstAndInitial: { [key: string]: number } = {};

  users.forEach((user) => {
    const [first, last] = user.toLowerCase().split(" ");
    const firstAndInitial = first + " " + last[0];

    if (!numsFirst[first]) {
      numsFirst[first] = 0;
    }
    numsFirst[first]++;

    if (!numsFirstAndInitial[firstAndInitial]) {
      numsFirstAndInitial[firstAndInitial] = 0;
    }
    numsFirstAndInitial[firstAndInitial]++;
  });

  return users
    .map((user) => {
      const [first, last] = user.toLowerCase().split(" ");
      const firstAndInitial = first + " " + last[0];

      if (numsFirst[first] === 1) {
        return capitalize(first);
      }
      if (numsFirst[first] > 1 && numsFirstAndInitial[firstAndInitial] == 1) {
        return capitalize(first) + " " + capitalize(last[0]);
      } else {
        return capitalize(first) + " " + capitalize(last);
      }
    })
    .sort();
}

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
