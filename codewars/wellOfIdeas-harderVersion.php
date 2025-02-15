<?php
function well($arr): string {
    $num_good_ideas = 0;

    for ($i = 0; $i < count($arr); $i++) {
        $curr_sub_array = $arr[$i];

        for ($j = 0; $j < count($curr_sub_array); $j++) {
            $curr_element = $curr_sub_array[$j];

            if (strtolower($curr_element) === 'good') $num_good_ideas++;
        }
    }

    if ($num_good_ideas > 2) return 'I smell a series!';
    if ($num_good_ideas > 0) return 'Publish!';
    return 'Fail!';
}