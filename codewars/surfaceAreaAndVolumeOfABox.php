<?php
function getSize($width, $height, $depth) {
  $totalArea = 2 * ($width * $height + $height * $depth + $depth * $width);
  $volume = $width * $height * $depth;
  return [$totalArea, $volume];
}