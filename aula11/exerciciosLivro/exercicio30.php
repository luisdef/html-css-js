<?php
$num1 = rand(1,10);
$num2 = rand(10,20);

$soma = 0;
for ($i=$num1; $i<=$num2; $i++) {
  $soma += $i;
}

echo "Soma dos números entre $num1 e $num2 ===> $soma.";