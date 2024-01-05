<?php
$dbservername = $_SERVER['REDIRECT_DB_SERVER'];
$dbname = $_SERVER['REDIRECT_DB_FLOGIN_USERNAME'];
$username = $_SERVER['REDIRECT_DB_FLOGIN_PASSWORD'];
$dbpass = $_SERVER['REDIRECT_DB_FLOGIN_NAME'];

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