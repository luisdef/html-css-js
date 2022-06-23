<?php
$name = $_POST["name"];

if ($name === "Luis") {
  echo "<p>Que nome bacana, $name</p>";
} else {
  echo "<p>Seu nome é: $name</p>";
}