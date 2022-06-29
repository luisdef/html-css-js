<h1>Exercício 18</h1>

<h2>a)</h2>
<?php
for ($i=1; $i<=5; $i++) {
  echo $i." ";
}
?>

<h2>b)</h2>
<?php
$i = 2;
while ($i <= 10) {
  echo $i." ";
  $i+=2;
}
?>

<h2>c)</h2>
<?php
$i = 2;
do {
  echo $i." ";
  $i+=2;
} while ($i <= 10);
?>

<h2>d)</h2>
<?php
$a = true;
$b = -2;
$c = 7;
for ( ; $b < $c || $a; $b++) {
  if ($c + $b * 2 > 20)
    $a = false;
  echo $b." ";
}
?>

<h2>e)</h2>
<?php
$a = true;
$b = -2;
$c = 6;
for ( ; $b < $c || $a; $b++) {
  if ($c + $b * 2 > 20)
    $a = false;
  echo $b." ";
}
?>

<h2>f)</h2>
<?php
$num = 5;
$res = 1;
do {
  $res *= $num--;
} while ($num > 1);
echo $res;
?>


<h2>g)</h2>
<?php
$num = 4;
$res = 1;
do {
  $res *= $num--;
} while ($num > 1);
echo $res;
?>

<h2>h)</h2>
<?php
$num = 3;
do {
  if ($num % 3 == 1)
    echo $num." ";
} while (++$num<20);
?>

<h2>i)</h2>
<?php
$a = 0;
while (++$a <= 4) {
  for ($i=1; $i<=$a; $i++)
    echo $i." ";
  echo "<br>";
}
?>

<h2>j)</h2>
<?php
$a = 0;
while (++$a <= 5) {
  for ($i=1; $i<=$a; $i++)
    echo $i." ";
  echo "<br>";
}
?>