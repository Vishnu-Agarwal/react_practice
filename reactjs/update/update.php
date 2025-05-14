<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$con = mysqli_connect("localhost", "root", "", "test");



$id = $_POST['id'];
$icecream_name = $_POST['icecream_name'];
$flavor = $_POST['flavor'];
$price = $_POST['price'];
$discount = $_POST['discount'];
$weight = $_POST['weight'];


$sql = "UPDATE ice_insert 
        SET icecream_name='$icecream_name', 
            flavor='$flavor', 
            price='$price', 
            weight='$weight', 
            discount='$discount'
        $image_sql
        WHERE id=$id";
mysqli_query($con, $sql);

?>
