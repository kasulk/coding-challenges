export function time(
  distance: number,
  boatSpeed: number,
  stream: String
): number {
  //
  const [streamDir, streamSpeedStr] = stream.split(" ");
  let streamSpeed = Number(streamSpeedStr);

  if (streamDir === "Upstream") streamSpeed *= -1;

  const totalSpeed = boatSpeed + streamSpeed;

  return Number((distance / totalSpeed).toFixed(2));
}
