export function maxlen(l1: number, l2: number): number {
  const longer = Math.max(l1, l2);
  const shorter = Math.min(l1, l2);

  if (longer === shorter || longer / 2 < shorter) return longer / 2;
  if (longer > shorter * 3) return longer / 3;

  const l3 = longer - shorter;

  if (l3 >= shorter) return shorter;
  return l3;
}
