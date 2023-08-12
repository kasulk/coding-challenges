function capital(capitals) {
  // for each element
  // if it has a property state, push string with state and capital
  // else push string with country and capital

  return capitals.map(
    (capital) =>
      `The capital of ${
        capital.hasOwnProperty("state") ? capital.state : capital.country
      } is ${capital.capital}`
  );
}
