<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$con = mysqli_connect("localhost", "root", "", "test");


     

      $image=$_FILES['image']['name']; // image and name upload
    $tmp_name=$_FILES['image']['tmp_name']; //  tempararey image and name 
    $path="image/".$image; // path of folder , dot(.) used for joining the string $image = "picture.jpg + image/
    move_uploaded_file($tmp_name,$path); // image  upload in user system


$sql = "UPDATE `addstore`
SET 
    `storename` = '$n',
    `city` = '$f',
    `state` = '$p',
    `address` = '$w',
    `imageurl` = '$image'
WHERE `id` = $id";

mysqli_query($con, $sql);

?>
