<?php
function datingRange($age) {
  $min = $age > 14 ? ($age / 2) + 7 : $age - 0.10 * $age;
  $max = $age > 14 ? ($age - 7) * 2 : $age + 0.10 * $age;
  return floor($min)."-".floor($max);
}