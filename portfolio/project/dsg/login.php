<?php
$Username: = $_POST['Username:'];
$Gender: = $_POST['Gender:'];
$Email: = $_POST['Email:'];
$Password: = $_POST['Password:'];
$PhoneNumber: = $_POST['PhoneNumber:'];
$conn = new mysqli('localhost', 'root', '', 'test');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into registration(Username:,Gender:,Email:,Password:,PhoneNumber:)
        values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $Username:,$Gender:,$Email:,$Password:,$PhoneNumber:);
    $stmt->execute();
    echo "Registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>
