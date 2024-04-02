<?php
include('./db/dbconfig.php');
include('./headers/headerconfig.php');

$data = json_decode(file_get_contents('php://input'));

$email = $data->email;
$pwd = $data->password;

$query = "SELECT * FROM `user` WHERE email='$email'";
$dbpwd = mysqli_query($con, $query);

if (mysqli_num_rows($dbpwd) > 0) {
    while ($fetch = mysqli_fetch_assoc($dbpwd)) {
        $pass = $fetch['pass'];
        $uname = $fetch['name'];
        if ($pass == hash('sha512', $pwd)) {
            echo json_encode(['msg' => "OK", "name" => $uname]);
        } else {
            echo json_encode(['msg' => "INCORRECT"]);
        }
    }
} else {
    echo json_encode("NO");
}
