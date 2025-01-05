<?php
function excludingVatPrice($price){
  return $price ? round($price / 1.15, 2) : -1;
}