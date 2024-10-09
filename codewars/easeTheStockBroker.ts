export function balanceStatements(ordersStr: string): string {
  let sumBuys = 0;
  let sumSells = 0;
  let sumBadlyFormed = 0;
  let badlyFormed = "";

  const orders = ordersStr.split(", ");

  for (const order of orders) {
    if (!order) break;

    const [_, quantity, price, status] = order.split(" ");
    const isValidStatus = status === "B" || status === "S";

    if (isFloat(price) && !isFloat(quantity) && isValidStatus) {
      const amount = Number(quantity) * Number(price);

      if (status === "B") sumBuys += amount;
      if (status === "S") sumSells += amount;

      continue;
    }

    badlyFormed += order + " ;";
    sumBadlyFormed++;
  }

  const outputOrderValues = `Buy: ${Math.round(sumBuys)} Sell: ${Math.round(
    sumSells
  )}`;
  const outputBadlyFormed = sumBadlyFormed
    ? `; Badly formed ${sumBadlyFormed}: ${badlyFormed}`
    : "";

  return outputOrderValues + outputBadlyFormed;
}

function isFloat(strNum: string): boolean {
  return strNum.includes(".");
}
