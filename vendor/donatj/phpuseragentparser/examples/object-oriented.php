<?php

use donatj\UserAgent\UserAgentParser;

// if you're using composer
require __DIR__ . '/../vendor/autoload.php';

$parser = new UserAgentParser();

// object-oriented call
$ua = $parser->parse();
// or
// command style invocation
$ua = $parser();

echo $ua->platform() . PHP_EOL;
echo $ua->browser() . PHP_EOL;
echo $ua->browserVersion() . PHP_EOL;
