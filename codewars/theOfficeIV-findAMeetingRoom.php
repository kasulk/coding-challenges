<?php
function meeting($rooms) {
  foreach ($rooms as $key => $room) {
    if ($room === 'O') return $key;
  };
  return "None available!";
}