<?php
//$curl=curl_init('http://www.baidu.com');
$curl = curl_init();			// 初始化
curl_setopt($curl, CURLOPT_URL, "http://www.baidu.com");		// 设置访问网页的URL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);			// 执行之后不直接打印出来
$output =curl_exec($curl);

curl_close($curl);
echo "ok\r\n" . str_replace("html","test",$output);
?>