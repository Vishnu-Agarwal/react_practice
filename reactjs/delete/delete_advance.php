<?php


// Connect to database
$con=mysqli_connect("localhost","root","","test");



// Get POST data
$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id1'] ;

if ($id) {
    $qry = "DELETE FROM addtestimonial WHERE id = $id";
    if (mysqli_query($con, $qry)) {
        echo json_encode("Record deleted successfully.");
    } else {
        echo json_encode("Failed to delete record: " . mysqli_error($con));
    }
} else {
    echo json_encode("Invalid ID.");
}

mysqli_close($con);
?>


