<?php
$dir = getcwd();
$files = scandir($dir);

echo "Arquivos em $dir:<br>";

// É bool E NÃO boolean
function endsWith($string, $endString): string
{
  $len = strlen($endString);
  if ($len == 0) {
    return true;
  }
  return (substr($string, -$len) === $endString);
}

foreach ($files as $file) {
  if (endsWith($file, ".php") || endsWith($file, ".html")) {
    echo "<a href=\"./$file\">$file</a><br>";
  }
}
