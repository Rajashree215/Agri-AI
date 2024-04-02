<?php
include('./db/dbconfig.php');
include('./headers/headerconfig.php');

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;

$query = "INSERT INTO `subscribers` (email) VALUES('$email')";
$sql = mysqli_query($con, $query);

if ($sql) {
    echo json_encode(['msg' => "OK"]);
} else {
    echo json_encode(['msg' => 'NOT OK']);
}
