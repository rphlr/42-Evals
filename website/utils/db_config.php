<?php
if (!defined('42Evals'))
    exit('No direct access allowed');
define('DB_SERVER', getenv('DB_SERVER'));
define('DB_USERNAME', getenv('DB_LOGIN_USERNAME'));
define('DB_PASSWORD', getenv('DB_LOGIN_PASSWORD'));
define('DB_NAME', getenv('DB_LOGIN_NAME'));
?>
