function getOrder(input) {
  const menu =
    "Burger,Fries,Chicken,Pizza,Sandwich,Onionrings,Milkshake,Coke".split(",");

  let remainingOrder = input;
  let result = [];

  menu.forEach((item) => {
    const curr = item.toLowerCase();
    const currLen = curr.length;
    const lenBefore = remainingOrder.length;

    remainingOrder = remainingOrder.replaceAll(curr, "");

    const lenAfter = remainingOrder.length;
    const numItems = (lenBefore - lenAfter) / currLen;

    result.push(...Array(numItems).fill(item));
  });

  return result.join(" ");
}
