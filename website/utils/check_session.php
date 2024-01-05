<?php
session_start();

if (!isset($_SESSION['user'])) {
	$_SESSION['redirect_url'] = $_SERVER['REQUEST_URI'];
	header("Location: ../login");
	exit();
}
?>