
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title></title>
</head>
<body>
</body>
<?php
    $family = ["dad","mom","son"];
    var_dump($family);

    //遍历
    for($i = 0; $i < count($family); $i++){
        echo $family[$i]."<br>";
    };
    //
    foreach($family as $v){
        echo "<br>".$v;
    };

    $person = array(
        "name" => "张三",
        "age" => 17
        );
    var_dump($person);

?>
</html>

