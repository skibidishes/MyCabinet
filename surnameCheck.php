<?php 
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (empty($_POST['checkSurname'])) {
        echo 'Возникла ошибка';
    } else {
        if (file_exists('./sSurname.txt')) {
            $savedSurname = file_get_contents('./sSurname.txt', true);
            if (!empty($savedSurname)) {
            echo $savedSurname;
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