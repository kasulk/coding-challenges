export function* generator(a: number): Generator<string> {
  for (let i = 1; i < Infinity; i++) {
    yield `${a} x ${i} = ${a * i}`;
  }
}
