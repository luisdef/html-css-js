<h1>Exercício 2</h1>

<h2>a)</h2>
<?php
$x = 1;
$x = -$x;
$y = -$x;
echo $x."<br>".$y."<br>";
?>

<h2>b)</h2>
<?php
$a = 13;
$b = $a%4;
$c = $b/5;
$d = (int)($b/5);
echo $b."<br>".$c."<br>".$d."<br>";
?>

<h2>c)</h2>
<?php
$x = 10;
$x /= 4;
echo $x."<br>";
echo floor($x)."<br>";
echo ceil($x)."<br>";
?>

<h2>d)</h2>
<?php
echo round(3.4)."<br>";
echo round(3.5)."<br>";
echo round(3.6)."<br>";
echo round(5.045, 2)."<br>";
echo round(5.055, 2)."<br>";
?>

<h2>e)</h2>
<?php
$n = 2;
$x = 3;
$p = pow($n, $x);
echo $p."<br>";
$r = sqrt(9);
echo $r."<br>";
?>

<h2>f)</h2>
<?php
$min = 1;
$max = 10;
echo rand($min, $max);
?>

<h2>h)</h2>
<?php
$a = 5;
echo $a++."<br>";
echo $a."<br>";
$a = 5;
echo ++$a."<br>";
echo $a."<br>";
$a = 5;
echo $a--."<br>";
echo $a."<br>";
$a = 5;
echo --$a."<br>";
echo $a."<br>";
?>

<?php
$a = "oie";
echo $a;
echo ($a && $b);
?>
