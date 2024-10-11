type AddressesByState = { [key: string]: string[] };

export function byState(str: string): string {
  const addressesByState = createObjWithAddressesByState(str);
  return createSortedStrFromAddressesByState(addressesByState);
}

function createObjWithAddressesByState(str: string): AddressesByState {
  const addressesByState: AddressesByState = {};
  const addresses = str.split("\n");

  for (const address of addresses) {
    if (!address) continue;

    const addressParts = address.split(", ");
    const location = addressParts.pop() ?? "";
    const [city, stateSymbol] = splitLocation(location);
    const state = statesMap[stateSymbol];
    addressParts.push(`${city} ${state}`);

    if (!addressesByState[state]) addressesByState[state] = [];
    addressesByState[state].push(addressParts.join(" "));
  }

  return addressesByState;
}

function createSortedStrFromAddressesByState(
  addressesByState: AddressesByState
): string {
  const output: string[] = [];

  Object.entries(addressesByState)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([state, addresses]) => {
      output.push(` ${state}`);

      addresses.sort().forEach((address) => {
        output.push(`..... ${address}`);
      });
    });

  return output.join("\r\n").slice(1);
}

function splitLocation(location: string): string[] {
  const parts = location.split(" ");
  const stateSymbol = parts.pop() ?? "";
  const city = parts.join(" ");
  return [city, stateSymbol];
}

const statesMap: { [key: string]: string } = {
  AZ: "Arizona",
  CA: "California",
  ID: "Idaho",
  IN: "Indiana",
  MA: "Massachusetts",
  OK: "Oklahoma",
  PA: "Pennsylvania",
  VA: "Virginia",
};
