export function travel(r: string, zipcode: string): string {
  if (!zipcode) return ":/";

  const addresses = r.split(",");
  const addressesByZip = addresses.filter((address) =>
    address.includes(zipcode)
  );
  const output: string[][] = [[zipcode], [], []];

  for (let address of addressesByZip) {
    if (zipcode.length !== 8) break;

    const addressWithoutZipcode = address.slice(0, -zipcode.length - 1);

    const no = addressWithoutZipcode.split(" ", 2)[0];
    const street = addressWithoutZipcode.slice(no.length + 1);

    output[1].push(street);
    output[2].push(no);
  }

  return zipcode + ":" + output[1].join(",") + "/" + output[2].join(",");
}
