<?php

require __DIR__ . '/../src/UserAgentParser.php';

$time = microtime(true);

$uas = json_decode(file_get_contents(__DIR__ . '/../tests/user_agents.dist.json'), true);


foreach( $uas as $ua => $junk ) {
	$uatime = microtime(true);
	for( $i = 0; $i <= 1000; $i++ ) {
		\parse_user_agent($ua);
	}


	echo microtime(true) - $uatime;
	echo " : $ua\n";
}


echo microtime(true) - $time;
echo " : TOTAL\n";

