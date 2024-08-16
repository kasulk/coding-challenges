function bingo(ticket, win) {
  let miniWins = 0;

  for (let subArr of ticket) {
    const [str, num] = subArr;

    for (let char of str) {
      if (char.charCodeAt(0) === num) {
        miniWins++;
        break;
      }
    }
  }

  return miniWins >= win ? "Winner!" : "Loser!";
}
