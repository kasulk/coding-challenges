<?php
function chromosomeCheck(string $sperm): string {
  $childType = str_contains($sperm, "Y") ? "son" : "daughter"; 
  return "Congratulations! You're going to have a $childType.";
}