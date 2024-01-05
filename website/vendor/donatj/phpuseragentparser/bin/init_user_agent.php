<?php

require(__DIR__ . '/../vendor/autoload.php');

$jsonfile = __DIR__ . '/../Tests/user_agents.dist.json';

$uas = json_decode(file_get_contents($jsonfile), true);

foreach( $uas as $key => &$val ) {
	$val = parse_user_agent($key);
}

echo json_encode($uas);
