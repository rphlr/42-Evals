<?php

// if you're using composer
require __DIR__ . '/../vendor/autoload.php';

// v0 style global function - @deprecated
$uaInfo = parse_user_agent();
// or
// modern namespaced function
$uaInfo = donatj\UserAgent\parse_user_agent();

echo $uaInfo[donatj\UserAgent\PLATFORM] . PHP_EOL;
echo $uaInfo[donatj\UserAgent\BROWSER] . PHP_EOL;
echo $uaInfo[donatj\UserAgent\BROWSER_VERSION] . PHP_EOL;
