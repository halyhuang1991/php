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
//单例模式
$db1 = F\subnamespace\Uni::getInstance("getInstance");
echo $db1 -> getName().'<br/>';
$a="asa";
$b="asa";
echo "Hello World!"."<br/>";
//读写文件
include "./io/file.php";
//http://localhost:9000
//http://localhost:8082/dashboard/phpinfo.php

?>