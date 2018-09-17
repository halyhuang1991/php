<?php
$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".</br>";
$arrlength=count($cars);
for($x=0;$x<$arrlength;$x++)
  {
  echo $cars[$x];
  echo "<br>";
  }
  foreach ($cars as $value) {
    echo "foreach--"."$value <br>";
  }
  //遍历并打印关联数组的所有值
  $age=array("Bill"=>"60","Steve"=>"56","Mark"=>"31");

  foreach($age as $x=>$x_value)
    {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
    }
    // 二维数组：
$cars=array
(
array("Volvo",100,96),
array("BMW",60,59),
array("Toyota",110,100)
);
sort($cars);
echo $cars[0][0].": Ordered: ".$cars[0][1].". Sold: ".$cars[0][2]."<br>";
echo $cars[1][0].": Ordered: ".$cars[1][1].". Sold: ".$cars[1][2]."<br>";
echo $cars[2][0].": Ordered: ".$cars[2][1].". Sold: ".$cars[2][2]."<br>";
?>