<?php
function multi($nums) {
  return array_reduce($nums, function($acc, $curr) {
    return $acc * $curr;
  }, 1);
}

function add($nums) {
  return array_reduce($nums, function($acc, $curr) {
    return $acc + $curr;
  }, 0);
}

function reverse($str) {
  return strrev($str);
}
