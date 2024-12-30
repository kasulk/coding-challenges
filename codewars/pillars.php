<?php
function pillars($numPillars, $dist, $width) {
  $sumDistancesInCM = ($numPillars - 1) * $dist * 100;
  $sumWidthsInCM = ($numPillars - 2) * $width;
  return $numPillars > 1 ? $sumDistancesInCM + $sumWidthsInCM : 0;
}