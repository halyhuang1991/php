<?php
session_start();
// store session data
setcookie("user", "Alex Porter", time()+3600);
if(isset($_SESSION['views']))
  $_SESSION['views']=$_SESSION['views']+1;
else
  $_SESSION['views']=1;

$q=$_POST["q"];
echo "post".$q." ".$_SESSION['views'];
?>