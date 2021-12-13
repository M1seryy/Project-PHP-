<?php
$area = $_POST['text'];
$file = file_get_contents('code.txt');
if($area == $file)
{
    include "correct.html";
}
else
{
include "false.html";
}

?>