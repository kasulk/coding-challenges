export function findRoutes(routes: string[][]): string {
  const startIndex = findStartIndex(routes);
  const firstRoute = routes.splice(startIndex, 1)[0];

  let currDestination = firstRoute[1];
  let destSequence = [...firstRoute];

  while (routes.length) {
    const currRouteIndex = routes.findIndex(
      (route) => route[0] === currDestination
    );
    const currRoute = routes.splice(currRouteIndex, 1)[0];

    currDestination = currRoute[1];
    destSequence.push(currDestination);
  }

  return destSequence.join(", ");
}

function findStartIndex(routes: string[][]): number {
  const starts = routes.map((route) => route[0]);
  const ends = routes.map((route) => route[1]);

  for (let i = 0; i <= starts.length; i++) {
    if (!ends.includes(starts[i])) return i;
  }

  return 0;
}
