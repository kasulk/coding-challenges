<?php
function countWins($winnerList, $country) {
   return array_reduce($winnerList, function($sum, $currWinner) use ($country) {
    return $currWinner['country'] === $country ? $sum + 1 : $sum;
   }, 0); 
};