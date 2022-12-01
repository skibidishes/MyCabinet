<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (empty($_POST['checkInfo'])) {
        echo 'Возникла ошибка';
    } else {
        if (file_exists('./sInfo.txt')) {
            $savedInfo = file_get_contents('./sInfo.txt', true);
            if (!empty($savedInfo)) {
            echo $savedInfo;
            } 
            else {
                echo 1;
            }
        } 
        else {
            echo 1;
        }
    }
}
?>