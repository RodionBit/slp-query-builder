<?php

$server = "localhost";
$login = "r0d10n_slp";
$password= "Ripper13";
$name_db = "r0d10n_slp";

$induction = mysqli_connect($server, $login, $password, $name_db);

if ($induction == false)
{
    echo "Ошибка подключения";
}

?>