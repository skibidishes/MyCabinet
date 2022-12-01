<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['name'];
    if (empty($name)) {
        echo 'Вы не заполнили поле';
    } else {
        file_put_contents('./sName.txt', $name);
        echo 'Ваше имя сохранено: ' . $name;
    }
}
?>