<style>
  body {
    text-align: center;
  }
  p {
    font-size: 1.2rem;
  }
</style>
<h1>Alfabeto:</h1>
<?php
foreach (range('A', 'Z') as $letra) {
  echo "<p>$letra</p>";
}