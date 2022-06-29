<?php
$numbs = [rand(1,10),rand(1,10),rand(1,10)];

echo implode(" ", $numbs)."<br><br>";

$menor = $numbs[0];
foreach ($numbs as $numb) {
  if ($numb < $menor)
    $menor = $numb;
}

echo "$menor é o menor";