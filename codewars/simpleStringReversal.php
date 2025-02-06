<?php
function solve(string $str): string {
    $output = '';
    $strWithoutSpaces = str_replace(' ', '', $str);
    $charsWithoutSpaces = str_split($strWithoutSpaces);

    for ($i = 0; $i < strlen($str); $i++) { 
      if ($str[$i] === ' ') $output .= ' ';
      else $output .= array_pop($charsWithoutSpaces);
    }

    return $output;
}