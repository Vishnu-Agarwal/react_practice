<?php


header('Content-Type: application/json');//pretty format use
$con=mysqli_connect("localhost","root","","test");


    $qry="SELECT * FROM `addstore`";

    $result=mysqli_query($con,$qry);

    $data=[];

    while($row=mysqli_fetch_assoc($result))
    {
        $data[]=$row;
    }

    echo json_encode($data);
?>