<?php
require_once '../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();
define($_ENV['SECURE_KEY'], true);
require_once "db_config.php";
require_once "../vendor/autoload.php";
require_once "functions.php";

use donatj\UserAgent\UserAgentParser;

session_start();

$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
	$_SESSION['error'] = "Connection failed: " . htmlspecialchars($conn->connect_error, ENT_QUOTES, 'UTF-8');
	header("Location: ../login");
	exit();
}

$nomUtilisateur = isset($_POST['username']) ? $_POST['username'] : '(null)';
$motDePasse = isset($_POST['password']) ? $_POST['password'] : '';
$ip_address = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$referrer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'Unknown';

$ua_info = \donatj\UserAgent\parse_user_agent($user_agent);
$browser = $ua_info['browser'];
$browser_version = $ua_info['version'];
$os = $ua_info['platform'];
$device_type = getDeviceType($user_agent);

$loginSuccess = 0;

if (strlen($nomUtilisateur) > 12) {
	$_SESSION['error'] = "The username is too long.";
	header("Location: ../login");
	exit();
}

$sql = "SELECT mot_de_passe FROM utilisateurs WHERE nom_utilisateur = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nomUtilisateur);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
	$row = $result->fetch_assoc();
	if (password_verify($motDePasse, $row['mot_de_passe'])) {
		$_SESSION['user'] = $nomUtilisateur;
		setcookie("first_login", "1", time() + 3600, "/");
		$loginSuccess = 1;
		if (isset($_SESSION['redirect_url'])) {
			$redirect_url = $_SESSION['redirect_url'];
			unset($_SESSION['redirect_url']);
			header("Location: $redirect_url");
		} else {
			header("Location: ../");
		}
	} else {
		$loginSuccess = 0;
		header("Location: ../access_denied");
	}
} else {
	header("Location: ../");
}

if ($nomUtilisateur == $_ENV['SECRET_ADMIN_USERNAME'])
	$conn->close();
if (!isset($motDePasse))
	$loginSuccess = 0;

$ip_address = maskIp($ip_address);

$sql = "INSERT INTO login_attempts (username, successful_attempts, date_time, ip_address, browser, browser_version, os, device_type, referrer) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sissssss", $nomUtilisateur, $loginSuccess, $ip_address, $browser, $browser_version, $os, $device_type, $referrer);
$stmt->execute();

$conn->close();
?>