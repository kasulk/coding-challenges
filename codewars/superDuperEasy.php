function problem(int|float|string $x): int|float|string {
  return is_string($x) ? "Error" : $x * 50 + 6;
}