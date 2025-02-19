<?php
function remove(string $str): string {
  $words = explode(' ', $str);

  $filteredWords = array_filter($words, function($word) {
    $wordWithoutExclMarks = str_replace('!', '', $word);
    return strlen($wordWithoutExclMarks) !== strlen($word) - 1;
  });

  return implode(' ', $filteredWords);
}