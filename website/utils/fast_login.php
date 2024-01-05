<?php
require_once __DIR__ . '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$dbservername = getenv('DB_SERVER');
$dbname = getenv('DB_FLOGIN_NAME');
$username = getenv('DB_FLONIN_USERNAME');
$dbpass = getenv('DB_FLOGIN_PASSWORD');

// Connexion à la base de données
$conn = new mysqli($dbservername, $username, $dbpass, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

// Requête SQL pour insérer un enregistrement
$sql = "INSERT INTO UserActivity (timestamp) VALUES (NOW())";

if ($conn->query($sql) === TRUE) {
	// Redirection vers YouTube ou toute autre URL
	header("Location: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	exit();
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>