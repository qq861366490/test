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
   $persons = array(
            array(
             "name" => "张三",
            "age" => 18),
            array( 
            "name" => "李四",
            "age" => 19)
           array( 
            "name" => "王二",
            "age" => 19)
          
        
    );
   var_dump($persons[1]["name"]);
?>
</html>

