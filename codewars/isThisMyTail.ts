export function correctTail(body: string, tail: string): boolean {
  const bodyLastChar = body[body.length - 1];
  return bodyLastChar === tail;
}
