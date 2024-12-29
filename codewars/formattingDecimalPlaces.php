<?php
function twoDecimalPlaces(float $num): float {
  return number_format($num, 2, ".", "");
}