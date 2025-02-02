function findScreenHeight(width, ratio) {
  const [ratioWidth, ratioHeight] = ratio.split(":").map(Number);
  const height = (width / ratioWidth) * ratioHeight;
  return `${width}x${height}`;
}
