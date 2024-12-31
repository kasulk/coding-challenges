<?php
function remove(string $str, int $n): string {
  return preg_replace("/!/", "", $str, $n);
}