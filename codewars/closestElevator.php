<?php
function elevator(int $left, int $right, int $call): string {
    $distLeft = abs($left - $call);
    $distRight = abs($right - $call);
    return $distLeft < $distRight ? "left" : "right";
}