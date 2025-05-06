<?php

    $con=mysqli_connect("localhost","root","","demo");

    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    $qry="INSERT INTO `students`(`id`, `name`, `email`, `password`) VALUES (null,'$name','$email','$password')";

    mysqli_query($con,$qry);
?>