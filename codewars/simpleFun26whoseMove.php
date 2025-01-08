<?php
function whose_move(string $last_player, bool $won): string {
  $other_player = $last_player === 'white' ? 'black' : 'white';
  return $won ? $last_player : $other_player;
}