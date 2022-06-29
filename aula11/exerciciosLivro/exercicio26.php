<?php
$temp = 1;
$num = rand(1, 30);
for ($i=2; $i<=sqrt($num); $i++) {
  if ($num % $i == 0) {
    $temp = 0;
  }
}

if ($num <= 1)
  $temp = 0;
if ($temp == 1) {
  echo "$num é primo.";
} else {
  echo "$num não é primo.";
}