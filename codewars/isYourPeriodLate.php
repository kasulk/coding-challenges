<?php
function periodIsLate($last, $today, $cycleLength) {
  $interval = $last->diff($today);
  return $interval->days > $cycleLength;
}