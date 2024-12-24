<?php
function remainder(int $a, int $b): int|null {
  $max = max($a, $b);
  $min = min($a, $b);
  return $min === 0 ? null : $max % $min;
}