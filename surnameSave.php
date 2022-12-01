<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $surname = $_POST['surname'];
    if (empty($surname)) {
        echo 'Вы не заполнили поле';
    } else {
        file_put_contents('./sSurname.txt', $surname);
        echo 'Ваша фамилия сохранена: ' . $surname;
    }
}
?>