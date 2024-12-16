<?php
function remove_exclamation_marks(string $string): string {
  return str_replace("!", "", $string);
}
