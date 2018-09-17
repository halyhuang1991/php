<?php
$myfile = fopen("./Temp/test.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("./Temp/test.txt"))."<br/>";
fclose($myfile);
echo readfile('http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"]."/Temp/test.txt");
$myfile = fopen("./Temp/newfile.txt", "w") or die("Unable to open file!");
$txt = "Bill Gates\n";
fwrite($myfile, $txt);
$txt = "Steve Jobs\n";
fwrite($myfile, $txt);
fclose($myfile);
?>