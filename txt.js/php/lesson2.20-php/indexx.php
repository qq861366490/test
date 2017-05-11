<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
           .container{
            width:1000px;
            margin:100px auto;
           }
           .container .vedio-items{
                width:195px;
                height: 150px;
                margin:20px 23px;
                float: left;
           }
        </style>
    </head>
    <body>
        <div class="container">
       
        <?php
            //文件引入  include  "文件名";
            include "dataa.php";
            //模拟读取数据库
            $data = new Data();
            $videos = $data->getvideoData();
            //var_dump($data->getvideoData()) ;
            //遍历数据
            foreach($videos as $v){
                echo '<div class="vedio-items">';
                echo '<img class="vedio-img" src="imgs/'.$v['img-url'].'">';
                echo '<p class="vedio-title">'.$v['intro'].'</p>';
                echo '</div>';
            }
        ?>
           
        </div>
        
    </body>
</html>