<?php
function remove(string $str): string {
  $words = explode(" ", $str);
  $results = array_map("removeAllExclamationMarksFromEnding", $words);

  return implode(" ", $results);
}

function removeAllExclamationMarksFromEnding(string $word): string {
    return preg_replace("/!*$/", "", $word);
}