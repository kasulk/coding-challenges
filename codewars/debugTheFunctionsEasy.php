<?php
function multi(array $nums): int {
  return array_reduce($nums, fn(int $acc, int $curr) => $acc * $curr, 1);
}

function add(array $nums): int {
  return array_reduce($nums, fn(int $acc, int $curr) => $acc + $curr, 0);
}

function reverse(string $str): string {
  return strrev($str);
}
