<?php
function fuel_price($litres, $price_per_litre) {
  $discount = 0;
  
  if ($litres >= 2) $discount = 0.05;
  if ($litres >= 4) $discount = 0.10;
  if ($litres >= 6) $discount = 0.15;
  if ($litres >= 8) $discount = 0.20;
  if ($litres >= 10) $discount = 0.25;

  return ($price_per_litre - $discount) * $litres;
}