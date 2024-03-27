<?php
include('./db/dbconfig.php');
include('./headers/headerconfig.php');

$data=json_decode(file_get_contents('php://input'));

$email=$data->email;
$pass=$data->pass;
$upass=hash('sha512',$pass);

$query="UPDATE `user` SET pass='$upass' WHERE email='$email'";
$sql=mysqli_query($con,$query);

if($sql)
{
    echo json_encode(['msg'=>"OK"]);
}
else
{
    echo json_encode(['msg'=>'NOT OK']);
}
