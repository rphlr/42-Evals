<?php

class UserAgentParserFunctionTest extends \PHPUnit\Framework\TestCase {

	/**
	 * @dataProvider userAgentDataProvider
	 */
	public function test_parse_user_agent( $string, $expected ) {
		$result = parse_user_agent($string);
		$this->assertSame($expected, $result, $string . " test failed!");
	}

	public function userAgentDataProvider() {
		$out = [];
		if( file_exists(__DIR__ . '/user_agents.json') && filesize(__DIR__ . '/user_agents.json') > 0 ) {
			$uas = json_decode(file_get_contents(__DIR__ . '/user_agents.json'), true);
		} else {
			$uas = json_decode(file_get_contents(__DIR__ . '/user_agents.dist.json'), true);
		}

		foreach( $uas as $string => $parts ) {
			$out[] = [ $string, $parts ];
		}

		return $out;
	}

	public function test_parse_user_agent_empty() {
		$expected = [
			'platform' => null,
			'browser'  => null,
			'version'  => null,
		];

		$result = parse_user_agent('');
		$this->assertSame($result, $expected);

		$result = parse_user_agent('Mozilla (asdjkakljasdkljasdlkj) BlahBlah');
		$this->assertSame($result, $expected);
	}

	/**
	 * I'm no longer using expectedException/setExpectedException because the
	 * semantics around expecting exceptions have changed so many times I can't
	 * reliably do it across as wide of a PHP version history as I wish to
	 * support
	 *
	 * @see https://thephp.cc/news/2016/02/questioning-phpunit-best-practices
	 */
	public function test_no_user_agent_exception() {
		unset($_SERVER['HTTP_USER_AGENT']);
		try {
			parse_user_agent();
		} catch(\InvalidArgumentException $ex) {
			$this->assertTrue(true); // easy way to quiet warning
			return;
		}

		$this->fail("Expected \InvalidArgumentException");
	}

	public function test_global_user_agent() {
		$_SERVER['HTTP_USER_AGENT'] = 'Test/1.0';
		$this->assertSame([ 'platform' => null, 'browser' => 'Test', 'version' => '1.0' ], parse_user_agent());
	}

}
