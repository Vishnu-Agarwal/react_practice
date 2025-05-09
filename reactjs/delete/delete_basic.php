
<?php

// Connect to database
$con=mysqli_connect("localhost","root","","test");



// Get POST data
$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id1'] ;


    $qry = "DELETE FROM addtestimonial WHERE id = $id";
   (mysqli_query($con, $qry));


//get is used for hide and post is used for show the data
?>