export function mean(list: string[]): [number, string] {
  let nums = 0;
  let letters = "";

  list.forEach((element) => {
    if (Number(element) || element === "0") nums += Number(element);
    else letters += element;
  });

  return [Number((nums / 10).toFixed(1)), letters];
}
