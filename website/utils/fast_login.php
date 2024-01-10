<?php
$dbservername = $_SERVER['REDIRECT_DB_SERVER'];
$dbname = $_SERVER['REDIRECT_DB_FLOGIN_NAME'];
$username = $_SERVER['REDIRECT_DB_FLOGIN_USERNAME'];
$dbpass = $_SERVER['REDIRECT_DB_FLOGIN_PASSWORD'];

$conn = new mysqli($dbservername, $username, $dbpass, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO UserActivity (timestamp) VALUES (NOW())";

$conn->query($sql);
$conn->close();

header("Location: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
exit();
?>