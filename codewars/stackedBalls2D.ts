export function stackHeight2d(layers: number): number {
  return layers > 0 ? 1 + (layers - 1) * 0.8660254037844385 : 0;
}
