<?php
function solve(string $str): string {
    $chars = str_split($str);
    $strWithoutSpaces = str_replace(' ', '', $str);
    $charsWithoutSpaces = str_split($strWithoutSpaces);
    $output = '';

    foreach ($chars as $char){
      if ($char === ' ') $output .= ' ';
      else $output .= array_pop($charsWithoutSpaces);
    }

    return $output;
}