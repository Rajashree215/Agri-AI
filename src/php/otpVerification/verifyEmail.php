<?php
include('../db/dbconfig.php');
include('../headers/headerconfig.php');

$data = json_decode(file_get_contents('php://input'));

$email=$data->email;

$query="SELECT * FROM `user` WHERE email='$email'";
$sql=mysqli_query($con,$query);

if(mysqli_num_rows($sql)>0)
{
    echo json_encode(['msg'=>'Proceed']);
}
else
{
    echo json_encode(['msg'=>'Error']);
}