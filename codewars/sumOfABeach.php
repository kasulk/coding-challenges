<?php
function sumOfABeach(string $beach): int {
  return preg_match_all('/sand|water|fish|sun/', strtolower($beach));
}