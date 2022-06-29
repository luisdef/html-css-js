<?php
$to_show = "ping";
for ($i=64; $i<=546; $i++) {
  if ($i % 2 == 0) {
    echo " $to_show,";
    if ($to_show === "ping")
      $to_show = "pong";
    else
      $to_show = "ping";
  }
  else
    echo " $i,";
}
