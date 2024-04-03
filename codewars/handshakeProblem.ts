export function getParticipants(handshakes: number): number {
  if (!handshakes) return 0;

  let sumHandshakes = 0;
  let numPeople = 0;

  for (let i = 1; ; i++) {
    sumHandshakes += i;
    numPeople = i;

    if (sumHandshakes >= handshakes) return numPeople + 1;
  }
}
