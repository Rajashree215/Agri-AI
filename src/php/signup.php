<?php
include('./db/dbconfig.php');

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Content-Type:application/json');

$data = json_decode(file_get_contents('php://input'));

$name = $data->name;
$email = $data->email;
$phoneno = $data->phoneno;
$pwd = hash('sha512', $data->pwd);
$city = $data->city;

$query = "INSERT INTO `user` (`name`,`email`,`phoneno`,`pass`,`city`) VALUES('$name','$email','$phoneno','$pwd','$city')";
if (!empty($name) && !empty($email) && !empty($phoneno) && !empty($pwd) && !empty($city)) {
    $sql = mysqli_query($con, $query);
    if ($sql) {
        echo json_encode(['msg' => "Registration successfull!"]);
    } else {
        echo json_encode(['msg' => "Registration failed"]);
    }
}
else{
    echo json_encode(['msg' => "Please fill all required fields"]);
}
