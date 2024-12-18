<?php
function replace(string $str): string {
  return preg_replace('/[aeiou]/i', '!', $str);
}