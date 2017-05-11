
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title></title>
</head>
<body>
</body>
<?php
   // $family= ["dad","mom","sister","father"];
   $family= array("dad","mom","sister","father","son")
   var_dump($family);
   echo "<br>";
   for($i = 0; $i < count($family);$i++){
        echo $family[$i]."<br>";
   };

   foreach($family as $v){
        echo "<br>".$v;
   };
    echo "<br>";

   $person = array(
        "name" = "张三",
        "age" = 18
    );
   var_dump($person) ;
   echo $person["name"];

   foreach($person as $k => $v){
        echo '<br>'.$k. '=>' .$v;
   }

?>
</html>

