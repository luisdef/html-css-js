<h1>Exercício 5</h1>

<h2>a)</h2>
<?php
$data = date("d-m-Y");
echo "Data: $data";
?>

<h2>b)</h2>
<?php
// mktime( hora, minuto, segundo, mes, dia, ano )
$jan1 = mktime(0,0,0,1,31,2014);
$jan1_30 = mktime(0,30,0,1,31,2014);
$dif = $jan1_30 - $jan1;
echo $dif;
?>

<h2>c)</h2>
<?php
$msg = "Olá, mundo!";
echo lcfirst($msg)."<br>";
echo ucfirst($msg)."<br>";
echo ucwords($msg)."<br>";
echo strtolower($msg)."<br>";
echo strtoupper($msg);
?>

<h2>d)</h2>
<?php
$msg = "      Cheio     de     espaços      ";
echo ltrim($msg)."<br>";
echo rtrim($msg)."<br>";
echo trim($msg)."<br>";
?>

<h2>e)</h2>
<?php
$busca = "nome";
$troca = "Felipe";
$frase = "E aí, nome";
$msg = str_replace($busca, $troca, $frase);
echo $msg;
?>

<h2>f)</h2>
<?php
$msg = "Oi, como foi seu dia?";
echo strlen($msg)."<br>";
echo substr_count($msg, 'oi');
?>

<h2>g)</h2>
<?php
$alphabet = "";
$counter = 0;
for ($i = 'a' ; $i != 'aa'; $i++) {
  $alphabet[$counter] = $i;
  $counter++;
}

echo substr($alphabet, 0, 1)."<br>";
echo substr($alphabet, 3, 5)."<br>";
echo substr($alphabet, 10, -2)."<br>";
echo substr($alphabet, strlen($alphabet)-2, 1)."<br>";
?>