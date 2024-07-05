export function spiderToFly(spider: string, fly: string): number {
  const radials = "ABCDEFGH";

  const a = Number(spider[1]);
  const b = Number(fly[1]);
  const angleSpider = radials.indexOf(spider[0]) * 45;
  const angleFly = radials.indexOf(fly[0]) * 45;

  const angleSpiderFly = Math.abs(angleSpider - angleFly);
  const cosine = Math.cos(degreesToRadians(angleSpiderFly));

  const distance = Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * cosine);

  return distance;
}

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}
