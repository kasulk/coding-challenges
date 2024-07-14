function getOrder(order) {
  const menu =
    "Burger,Fries,Chicken,Pizza,Sandwich,Onionrings,Milkshake,Coke".split(",");

  let remainingOrder = order;
  let readableOrder = [];

  menu.forEach((item) => {
    const curr = item.toLowerCase();
    const orderLenBefore = remainingOrder.length;

    remainingOrder = remainingOrder.replaceAll(curr, "");

    const orderLenAfter = remainingOrder.length;
    const numItems = (orderLenBefore - orderLenAfter) / curr.length;

    readableOrder.push(...Array(numItems).fill(item));
  });

  return readableOrder.join(" ");
}
