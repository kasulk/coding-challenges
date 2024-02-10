export const draw = (deck: string[]): string[] => {
  const drawnCards: string[] = [];
  const remainingDeck = [...deck];
  let i = 0;

  while (remainingDeck.length) {
    const currCard = remainingDeck.shift()!;
    if (i % 2 === 0) drawnCards.push(currCard);
    else remainingDeck.push(currCard);
    i++;
  }

  return drawnCards;
};
