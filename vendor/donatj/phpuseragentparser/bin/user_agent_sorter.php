<?php

require(__DIR__ . '/../vendor/autoload.php');

$jsonfile = __DIR__ . '/../Tests/user_agents.dist.json';

$uas = json_decode(file_get_contents($jsonfile), true);

foreach( $uas as $key => &$val ) {
	$val['key'] = $key;
}
unset($val);

uasort($uas, function ( $a, $b ) {

	if( $a['platform'] === null && $b['platform'] !== null ) {
		return 1;
	}
	if( $b['platform'] === null && $a['platform'] !== null ) {
		return -1;
	}

	$desktop = [ 'Windows', 'Linux', 'Macintosh', 'Chrome OS' ];

	$ad = in_array($a['platform'], $desktop, true);
	$bd = in_array($b['platform'], $desktop, true);

	if( !$ad && $bd ) {
		return 1;
	}

	if( $ad && !$bd ) {
		return -1;
	}

	if( $ad ) {
		$result = strnatcasecmp((string)$a['browser'], (string)$b['browser']);
		if( $result == 0 ) {

			$result = strnatcasecmp((string)$a['platform'], (string)$b['platform']);

			if( $result == 0 ) {
				$result = compare_version((string)$a['version'], (string)$b['version']);
			}
		}
	} else {
		$result = strnatcasecmp((string)$a['platform'], (string)$b['platform']);
		if( $result == 0 ) {

			$result = strnatcasecmp((string)$a['browser'], (string)$b['browser']);

			if( $result == 0 ) {
				$result = compare_version((string)$a['version'], (string)$b['version']);
			}
		}
	}

	if( $result == 0 ) {
		$result = strnatcasecmp((string)$a['key'], (string)$b['key']);
	}

	return $result;
});

foreach( $uas as &$val ) {
	unset($val['key']);
}
unset($val);

$jsonPretty = new Camspiers\JsonPretty\JsonPretty;

$json = $jsonPretty->prettify($uas) . "\n";
echo $json;


function compare_version( $a, $b ) {
	$cmp_a = explode('.', $a);
	$cmp_b = explode('.', $b);

	$max = max(count($cmp_a), count($cmp_b));

	$value = 0;

	for( $i = 0; $i < $max; $i++ ) {
		$aa = strtolower(isset($cmp_a[$i]) ? $cmp_a[$i] : '0');
		$bb = strtolower(isset($cmp_b[$i]) ? $cmp_b[$i] : '0');

		if( is_numeric($aa) && is_numeric($bb) && $aa !== $bb ) {
			$value = ($aa > $bb ? 1 : -1);
			break;
		}

		if( $cmp = strcmp($aa, $bb) ) {
			$value = $cmp / abs($cmp);
			break;
		}
	}

	return $value;
}