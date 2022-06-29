<?php
for ($i=1; $i<=8; $i++) {
  if ($i % 2 == 0) {
    $j = $i * -1;
    echo $j.", ";
  } else
    echo $i.", ";
}
