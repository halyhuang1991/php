<?php
$data = 'theCityName=北京';
$curlobj = curl_init();	
curl_setopt($curlobj, CURLOPT_URL, "http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName");  
curl_setopt($curlobj, CURLOPT_HEADER, 0); 
curl_setopt($curlobj, CURLOPT_RETURNTRANSFER, 1);  
curl_setopt($curlobj, CURLOPT_POST, 1);  
curl_setopt($curlobj, CURLOPT_POSTFIELDS, $data);  
curl_setopt($curlobj, CURLOPT_HTTPHEADER, array("application/x-www-form-urlencoded; charset=utf-8", 
	"Content-length: ".strlen($data)
	)); 
$rtn = curl_exec($curlobj);   
if(!curl_errno($curlobj)){
	// $info = curl_getinfo($curlobj); 
	// print_r($info);
	echo $rtn;  
} else {
  echo 'Curl error: ' . curl_error($curlobj);
}
curl_close($curlobj);
?>