<?php
function well(array $arrays): string {
  $num_good_ideas = 0;

  for ($i = 0; $i < count($arrays); $i++) {
    $sub_array = $arrays[$i];

    for ($j = 0; $j < count($sub_array); $j++) {
      $element = $sub_array[$j];
      if (strtolower($element) === 'good') $num_good_ideas++;
    }
  }

  if ($num_good_ideas > 2) return 'I smell a series!';
  if ($num_good_ideas > 0) return 'Publish!';
  return 'Fail!';
}