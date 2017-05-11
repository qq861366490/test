
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" href="imgs/catGif.jpg" type="/image/x-icon"/>
    <title></title>
    <style type="text/css">
        
    </style>
</head>
<body>
</body>
<?php
  function showName($name){
        echo $name;
  }
  showName("张三");
  echo "<br>";

  function add($num1,$num2){
        return $num1 + $num2;
  }
  echo add(3,5);

  function isYear($year){
        if($year < 0){
            echo "年份非法";
            return;
        }
        echo "年份合法";
  }
  isYear(-1000);
  isYear(1000);
?>
</html>

