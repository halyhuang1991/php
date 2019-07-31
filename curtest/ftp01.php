<?php
$curlobj = curl_init();	
curl_setopt($curlobj, CURLOPT_URL, "ftp://100.100.189.169:2100/test.txt");  
curl_setopt($curlobj, CURLOPT_HEADER, 0); 
curl_setopt($curlobj, CURLOPT_RETURNTRANSFER, 1);  
curl_setopt($curlobj, CURLOPT_TIMEOUT, 300); // times out after 300s
curl_setopt($curlobj, CURLOPT_USERPWD, "halyhuang:283");//FTP用户名：密码
// Sets up the output file
$outfile = fopen('./Temp/dest.txt', 'wb');//保存到本地的文件名
curl_setopt($curlobj, CURLOPT_FILE, $outfile);
$rtn = curl_exec($curlobj);  
fclose($outfile); 
if(!curl_errno($curlobj)){
	// $info = curl_getinfo($curlobj); 
	// print_r($info);
	echo "RETURN: " . $rtn;  
} else {
  echo 'Curl error: ' . curl_error($curlobj);
}
curl_close($curlobj);
?>