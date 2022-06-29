<?php
$num = rand(1, 15);
for ($i=$num; $i<=$num*3; $i++) {
  if ($i % 7 == 0) {
    echo "$i ";
    break;
  }
  echo "$i ";
}