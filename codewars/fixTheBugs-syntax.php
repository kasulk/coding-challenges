<?php
function my_first_kata($a, $b) {
  return (is_int($a) || is_float($a)) && (is_int($b) || is_float($b)) 
    ? ($a % $b) + ($b % $a)
    : false;
}