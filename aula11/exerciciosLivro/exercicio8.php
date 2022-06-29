<?php
$string_initial = "Comentários do Facebook não estão disponíveis no Google";

echo "Frase não modificada:<br>";
echo $string_initial."<br>";

// Modificação
$index_facebook = strpos($string_initial, "Facebook");

$sliced_facebook = substr($string_initial, $index_facebook+strlen("Facebook"));
$sliced_google = substr($string_initial, 0, $index_facebook+strlen("Facebook"));

$part1 = str_replace("Facebook", "Google", $sliced_google);
$part2 = str_replace("Google", "Facebook", $sliced_facebook);

echo "<br>Frase modificada:<br>";

echo "$part1$part2";