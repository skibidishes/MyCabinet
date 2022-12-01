<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (empty($_POST['checkName'])) {
        echo 'Возникла ошибка';
    } else {
        if (file_exists('./sName.txt')) {
            $savedName = file_get_contents('./sName.txt', true);
            if (!empty($savedName)) {
            echo $savedName;
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