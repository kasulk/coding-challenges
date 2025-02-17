<?php
function multi(array $nums): int {
  return array_product($nums);
}

function add(array $nums): int {
  return array_sum($nums);
}

function reverse(string $str): string {
  return strrev($str);
}
