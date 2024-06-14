function dataReverse(bits) {
  const bytes = [];

  for (let i = 0; i < bits.length; i += 8) {
    const byte = [...bits.slice(i, i + 8)];
    bytes.unshift(byte);
  }

  return bytes.flat();
}
