<?php
$idade = $_POST["idade"];
$link = "<a href=\"form.html\">Voltar</a>";
if ($idade >= 18 && $idade < 130) {
  echo "Maior de idade.<br>";
  echo $link;
} else if ($idade < 0) {
  echo "A pessoa não nasceu.<br>";
  echo $link;
} else if ($idade <= 18) {
  echo "Menor de idade.<br>";
  echo $link;
} else if ($idade > 130) {
    echo "Essa pessoa provavelmente morreu 😔<br>";
    echo $link;
}