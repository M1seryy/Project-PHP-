<?php


       if(empty($_POST['input1']) && empty($_POST['input2'])) 
  {
    include "false.html";
  } 
        elseif(!empty($_POST['input2']))
  {
    include "false.html";
  }
  elseif(!empty($_POST['input1']))
  {
      include "correctTest4.html";
  }
  
  if(!empty($_POST['input1']) && !empty($_POST['input2'])) 
  {
    include "false.html";
  } 
?>