export function getInLine(queue: number[]): number {
  let minutes = 0;
  const prioritizedQueue = prioritizeAndSortQueue(queue);
  let restOfQueue = prioritizedQueue;

  for (const guest of prioritizedQueue) {
    const curr = restOfQueue[0];
    let rest = restOfQueue.slice(1);
    minutes++;

    if (curr === 0) return minutes;

    restOfQueue = curr === 1 ? swap(rest) : rest;
  }

  return minutes;
}

function swap(queue: number[]): number[] {
  const newQueue = [...queue];

  for (let i = 0; i < queue.length / 2; i++) {
    const curr = queue[i];
    const swapPartner = queue[queue.length - 1 - i];
    if (curr === 1 || curr === 3 || swapPartner === 3) continue;

    newQueue[i] = swapPartner;
    newQueue[queue.length - 1 - i] = curr;
  }

  return newQueue;
}

function prioritizeAndSortQueue(queue: number[]): number[] {
  const priorityGuests = queue.filter((guest) => guest === 1 || guest === 2);
  const nonPriorityGuests = queue.filter((guest) => guest !== 1 && guest !== 2);
  return [...priorityGuests.sort((a, b) => a - b), ...nonPriorityGuests];
}
