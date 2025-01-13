<?php
function difference_of_squares(int $n): int {
  $simpleSum = 0;
  $squaresSum = 0;

  for ($i = 1; $i <= $n; $i++) {
    $simpleSum += $i;
    $squaresSum += $i * $i;
  };

  return ($simpleSum * $simpleSum) - $squaresSum;
}