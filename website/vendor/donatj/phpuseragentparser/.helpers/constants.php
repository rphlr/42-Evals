<?php

require __DIR__ . '/../vendor/autoload.php';

$class = new ReflectionClass($argv[1]);

echo "Predefined helper constants from `{$class->getName()}`\n\n";

echo "| Constant | {$argv[2]} | \n|----------|----------| \n";

foreach( $class->getConstants() as $constant => $value ) {
	echo "| `{$class->getShortName()}::{$constant}` |  {$value} | \n";
}

echo "\n";