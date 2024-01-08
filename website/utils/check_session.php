<?php
session_start();

$excludedExtensions = array('.otf', '.jpg', '.png', '.css', '.js');
$excludedPaths = array('/js/', '/srcs/', '/fonts/', '/images/');
$isResourceRequest = false;

$requestUri = $_SERVER['REQUEST_URI'];

foreach ($excludedExtensions as $ext) {
    if (substr($requestUri, -strlen($ext)) === $ext) {
        $isResourceRequest = true;
        break;
    }
}

foreach ($excludedPaths as $path) {
    if (strpos($requestUri, $path) === 0) {
        $isResourceRequest = true;
        break;
    }
}

if (!$isResourceRequest && !isset($_SESSION['user'])) {
    $_SESSION['redirect_url'] = $requestUri;
    header("Location: ../login");
    exit();
}
?>
