export function getParticipants(handshakes: number): number {
  if (!handshakes) return 0;

  let sumHandshakes = 0;

  for (let numPeople = 1; ; numPeople++) {
    if (sumHandshakes >= handshakes) return numPeople;
    sumHandshakes += numPeople;
  }
}
