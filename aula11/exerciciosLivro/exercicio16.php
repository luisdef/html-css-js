<?php
$num = rand(1, 30);
if ($num % 2 == 0) {
  echo "$num é múltiplo de 2<br>";
  if ($num % 3 == 0) {
    echo "$num é múltiplo de 3<br>";
  }
  if ($num % 7 == 0) {
    echo "$num é múltiplo de 7<br>";
  }
}
elseif ($num % 3 == 0) {
  echo "$num é múltiplo de 3<br>";
  if ($num % 7 == 0) {
    echo "$num é múltiplo de 7<br>";
  }
}
elseif ($num % 7 == 0) {
  echo "$num é múltiplo de 7<br>";
}
else {
  echo "$num não é múltiplo de 2, 3 nem de 7";
}