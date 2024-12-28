<?php
function differenceInAges($ages) {
  $youngest = min($ages);
  $oldest = max($ages);
  $difference = $oldest - $youngest;
  return [$youngest, $oldest, $difference];
}