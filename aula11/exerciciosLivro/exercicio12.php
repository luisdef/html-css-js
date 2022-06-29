<style>
  .manha {
    color: green;
  }
  .tarde {
    color: red;
  }
  .noite {
    color: blue;
  }
</style>

<?php
date_default_timezone_set("America/Sao_Paulo");

$hora = date("H");

if ($hora < 12 && $hora > 6) {
  echo "<p class=\"manha\">Bom dia!</p>";
}
elseif ($hora < 18) {
  echo "<p class=\"tarde\">Boa tarde!</p>";
}
else {
  echo "<p class=\"noite\">Boa noite!</p>";
}