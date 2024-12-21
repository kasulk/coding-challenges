<?php
function reverse(string $string): string {
  $trimmedArr = explode(" ", trim($string));
  return join(" ", array_reverse($trimmedArr));
}