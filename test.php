<?php
include "./func/function.php";
use F\subnamespace\foo;
$obj = new foo;
echo $obj->foofunction()."<br/>";
use F\subnamespace\foo as aliasfunname;
$obj = new aliasfunname;
echo $obj->foofunction()."<br/>";
use F\subnamespace ; 
$obj = new subnamespace\foo ;
echo $obj->foofunction()."<br/>";
echo foo::staticmethod()." ".F\subnamespace\FOO.'<br/>';
$a="asa";
$b="asa";
echo "Hello World!";
//http://localhost:9000
//http://localhost:8082/dashboard/phpinfo.php
?>