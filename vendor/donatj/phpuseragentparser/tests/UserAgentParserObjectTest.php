<?php

use donatj\UserAgent\UserAgentParser;

class UserAgentParserObjectTest extends \PHPUnit\Framework\TestCase {

	public function userAgentDataProvider() {
		$out = [];
		if( file_exists(__DIR__ . '/user_agents.json') && filesize(__DIR__ . '/user_agents.json') > 0 ) {
			$uas = json_decode(file_get_contents(__DIR__ . '/user_agents.json'), true);
		} else {
			$uas = json_decode(file_get_contents(__DIR__ . '/user_agents.dist.json'), true);
		}

		foreach( $uas as $string => $parts ) {
			$out[] = [ $string ];
		}

		return $out;
	}

	/**
	 * @dataProvider userAgentDataProvider
	 */
	public function test_parse( $string ) {
		$parser = new UserAgentParser;
		$result = $parser->parse($string);

		$expected = parse_user_agent($string);

		$this->assertSame($expected[\donatj\UserAgent\PLATFORM], $result->platform());
		$this->assertSame($expected[\donatj\UserAgent\BROWSER], $result->browser());
		$this->assertSame($expected[\donatj\UserAgent\BROWSER_VERSION], $result->browserVersion());
	}

	/**
	 * @dataProvider userAgentDataProvider
	 */
	public function test_invoke( $string ) {
		$parser = new UserAgentParser;
		$result = $parser($string);

		$expected = parse_user_agent($string);

		$this->assertSame($expected[\donatj\UserAgent\PLATFORM], $result->platform());
		$this->assertSame($expected[\donatj\UserAgent\BROWSER], $result->browser());
		$this->assertSame($expected[\donatj\UserAgent\BROWSER_VERSION], $result->browserVersion());
	}

}
