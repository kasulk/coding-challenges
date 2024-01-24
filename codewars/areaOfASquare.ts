export const squareArea = (num: number): number => {
  // circumference of a circle: C = 2*PI*r
  // radius of a circle:        r = C / 2*PI
  // num = C/4  =>  r = 4*C / 2*PI

  const radius = (4 * num) / (2 * Math.PI);

  return radius ** 2;
};
