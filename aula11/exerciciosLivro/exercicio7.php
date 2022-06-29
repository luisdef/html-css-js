<?php
$data_inicio = mktime(0,0,0,2,28,2016);
$data_fim = mktime(0,0,0,3,4,2016);

$diferenca = date('d', $data_fim - $data_inicio);

echo "Diferença entre 28/02/2016 e 04/03/2016: $diferenca dias.";
