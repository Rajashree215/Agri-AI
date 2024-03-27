<?php
include('../db/dbconfig.php');
include('../headers/headerconfig.php');

$data=json_decode(file_get_contents('php://input'));

$email=$data->email;
$otp=rand(100000,999999);
$msg="Your OTP is ".$otp."\nThis is a verified message for ".$email." for password change.\n Please ignore this message if you don't send it.";
$sub="OTP for Password Change from Agri AI";
$headers="From: galaxymessenger15@gmail.com";
// here give your email address in headers
try
{
    $sendotp=mail($email,$sub,$msg,$headers);
    if($sendotp)
    {
        echo json_encode(['msg'=>"otp sent",'otp'=>$otp]);
    }
    else
    {
        echo json_encode(['msg'=>"error sending otp"]);
    }
}
catch(Exception $e)
{
    json_encode(['msg'=>'exception'.$e]);
}