<?php
session_start();

$excludedExtensions = array('.otf', '.jpg', '.png', '.css', '.js');
$isResourceRequest = false;

foreach ($excludedExtensions as $ext) {
    if (substr($_SERVER['REQUEST_URI'], -strlen($ext)) === $ext) {
        $isResourceRequest = true;
        break;
    }
}

if (!$isResourceRequest && !isset($_SESSION['user'])) {
    $_SESSION['redirect_url'] = $_SERVER['REQUEST_URI'];
    header("Location: ../login");
    exit();
}
?>
