export function mango(quantity: number, price: number): number {
  const freeMangos = Math.trunc(quantity / 3);

  return (quantity - freeMangos) * price;
}
