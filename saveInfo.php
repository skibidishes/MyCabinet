<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $info = $_POST['info'];
    if (empty($info)) {
        echo 'Вы не заполнили поле';
    } else {
        file_put_contents('./sInfo.txt', $info);
        echo 'Ваш текст сохранен';
    }

}

?>