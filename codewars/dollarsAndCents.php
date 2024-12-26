<?php
function format_money(float $amount): string {
  $formattedAmount = number_format($amount, 2, ".", "");
  return "\$$formattedAmount";
}