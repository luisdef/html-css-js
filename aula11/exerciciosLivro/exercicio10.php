<h1>Exercício 10</h1>

<h2>a)</h2>
<?php
$nome = "Luis";
if ($nome == "Luis") {
  echo "O nome é Luis";
}
?>

<h2>b)</h2>
<?php
$nome = "Luis Felipe";
if ($nome == "Luis") {
  echo "O nome é Luis";
} else {
  echo "O nome não é Luis";
}
?>

<h2>c)</h2>
<?php
$num = rand();
$num *= 4;

if ($num % 2 == 0) {
  echo "O número é par";
} else {
  echo "O número é ímpar";
}
?>

<h2>d)</h2>
<?php
$idade = 17;
$sexo = "M";
if ($idade < 15 && $sexo == "F") {
  echo "É uma menina";
} else {
  if ($sexo == "M")
    echo "É um homem";
  else
    echo "É uma mulher";
  echo " e tem $idade anos.";
}
?>

<h2>e)</h2>
<?php
$a = 10;
$b = 3;
$c = true;
$d = "PHP";

if ($a > $b || $c) {
  echo "Mensagem 1<br>";
  if ($a == $b * 3 + $c)
    echo "Mensagem 2<br>";
  if ($c && $d)
    echo "Mensagem 3<br>";
}
?>

<h2>f)</h2>
<?php
$idade = 30;
if ($idade < 10) {
  echo "Criança";
}
elseif ($idade < 20) {
  echo "Jovem";
}
elseif ($idade < 60) {
  echo "Adulto";
}
else {
  echo "Idoso";
}
?>

<h2>g)</h2>
<?php
$bolo = "chocolate";
switch ($bolo) {
  case "chocolate":
    echo "Bolo de chocolate";
    break;
  case "baunilha":
    echo "Bolo de baunilha";
    break;
  case "limao":
    echo "Bolo de limao";
    break;
}
?>