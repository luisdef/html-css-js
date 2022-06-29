<?php

$num = rand(1, 14);
if ($num % 3 == 0) {
  echo "$num é múltiplo de 3<br>";
}
elseif ($num % 5 == 0) {
  echo "$num é múltiplo de 5<br>";
}
else {
  echo "$num não é múltiplo de 3 nem de 5";
}
