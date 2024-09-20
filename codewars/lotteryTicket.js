function bingo(ticket, win) {
  const miniWins = ticket.reduce((accWins, currSubArr) => {
    const [str, num] = currSubArr;

    for (const char of str) {
      if (char.charCodeAt(0) === num) return ++accWins;
    }

    return accWins;
  }, 0);

  return miniWins >= win ? "Winner!" : "Loser!";
}
