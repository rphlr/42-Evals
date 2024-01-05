<?php

namespace donatj\UserAgent;

class UserAgentParser {

	/**
	 * Parses a user agent string into its important parts, provide an object
	 *
	 * @param string|null $u_agent User agent string to parse or null. Uses $_SERVER['HTTP_USER_AGENT'] on NULL
	 * @return UserAgent an object with 'browser', 'browserVersion' and 'platform' methods
	 * @throws \InvalidArgumentException on not having a proper user agent to parse.
	 * @see \donatj\UserAgent\parse_user_agent()
	 *
	 */
	public function parse( $u_agent = null ) {
		$parsed = parse_user_agent($u_agent);

		return new UserAgent(
			$parsed[PLATFORM],
			$parsed[BROWSER],
			$parsed[BROWSER_VERSION]
		);
	}

	/**
	 * Parses a user agent string into its important parts
	 *
	 * @param string|null $u_agent User agent string to parse or null. Uses $_SERVER['HTTP_USER_AGENT'] on NULL
	 * @return UserAgent an object with 'browser', 'browserVersion' and 'platform' methods
	 * @throws \InvalidArgumentException on not having a proper user agent to parse.
	 * @see \donatj\UserAgent\parse_user_agent()
	 *
	 */
	public function __invoke( $u_agent = null ) {
		return $this->parse($u_agent);
	}

}
