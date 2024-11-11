export function getInLine(queue: number[]): number {
  let minutes = 0;
  const prioritizedQueue = prioritize(queue);
  let restOfQueue = prioritizedQueue;

  for (const guest of prioritizedQueue) {
    const curr = restOfQueue[0];
    let rest = restOfQueue.slice(1);
    minutes++;

    if (curr === 0) return minutes;
    if (curr === 1) restOfQueue = swap(rest);
    else restOfQueue = rest;
  }

  return minutes;
}

function swap(rest: number[]): number[] {
  for (let i = 0; i < rest.length / 2; i++) {
    const curr = rest[i];
    const swap = rest[rest.length - 1 - i];
    if (curr === 1 || curr === 3 || swap === 3) continue;
    rest[i] = swap;
    rest[rest.length - 1 - i] = curr;
  }

  return rest;
}

function prioritize(queue: number[]): number[] {
  const priorityGuests = getPriorityGuests(queue).sort((a, b) => a - b);
  const nonPriorityGuests = getNonPriorityGuests(queue);
  return [...priorityGuests, ...nonPriorityGuests];
}

function getPriorityGuests(queue: number[]): number[] {
  return queue.filter((guest) => guest === 1 || guest === 2);
}

function getNonPriorityGuests(queue: number[]): number[] {
  return queue.filter((guest) => guest !== 1 && guest !== 2);
}
