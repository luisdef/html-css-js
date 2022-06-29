<?php
// Mostrar média aritmética;
// Números pares entre 13 e 73;
$soma = 0;
$qtde_num = 0;

for ($i=13; $i<=73; $i++) {
  if ($i % 2 == 0) {
    $soma += $i;
    $qtde_num += 1;
  }
}

$media_aritmetica = $soma / $qtde_num;
echo "A média aritmética dos números pares compreendidos entre 13 e 73 é $media_aritmetica.";
