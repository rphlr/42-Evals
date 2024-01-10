<?php
if (!defined($_ENV['SECURE_KEY']))
	exit('No direct access allowed');
define('DB_SERVER', $_ENV['DB_SERVER']);
define('DB_USERNAME', $_ENV['DB_LOGIN_USERNAME']);
define('DB_PASSWORD', $_ENV['DB_LOGIN_PASSWORD']);
define('DB_NAME', $_ENV['DB_LOGIN_NAME']);
?>
