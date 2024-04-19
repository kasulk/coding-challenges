export function findRoutes(routes: string[][]): string {
  let startIndex = 0;
  //   let firstRouteIndex = 0;

  const starts = routes.map((route) => route[0]);
  const ends = routes.map((route) => route[1]);

  for (let i = 0; i <= starts.length; i++) {
    const curr = starts[i];

    if (!ends.includes(curr)) {
      startIndex = i;
      break;
    }
  }

  const firstRoute = routes.splice(startIndex, 1)[0];

  if (!firstRoute) return "";

  const start = firstRoute[0];
  let currDestination = firstRoute[1];
  let destSequence = [...firstRoute];

  while (routes.length) {
    const index = routes.findIndex((route) => route[0] === currDestination);
    const currRoute = routes.splice(index, 1)[0];

    currDestination = currRoute[1];
    destSequence.push(currDestination);
  }

  return destSequence.join(", ");
}
