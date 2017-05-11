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
   class Person{
        public $name = "pina";
        public $age = 19;
        function showInfo(){
            echo $this->name;
        }
        function info(){
            echo $this->name.'正在。。。。';
        }
   }

   $c = new Person();
   $c -> showInfo();
   echo "<br>";
   $c -> info();
?>
</html>

