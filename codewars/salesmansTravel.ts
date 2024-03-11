export function travel(r: string, zipcode: string): string {
  if (!zipcode) return ":/";

  const addresses = r.split(",").filter((address) => address.includes(zipcode));
  const results: string[][] = [[zipcode], [], []];

  for (let address of addresses) {
    if (zipcode.length !== 8) break;

    const addressWithoutZip = address.slice(0, -zipcode.length - 1);
    const houseNo = addressWithoutZip.split(" ", 2)[0];
    const street = addressWithoutZip.slice(houseNo.length + 1);

    results[1].push(street);
    results[2].push(houseNo);
  }

  return zipcode + ":" + results[1].join(",") + "/" + results[2].join(",");
}
