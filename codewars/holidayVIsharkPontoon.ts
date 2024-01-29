export function shark(
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: boolean
): string {
  //
  if (!sharkDistance || !youSpeed) return "Shark Bait!";

  if (dolphin) sharkSpeed /= 2;

  const youTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / sharkSpeed;

  return sharkTime <= youTime ? "Shark Bait!" : "Alive!";
}
