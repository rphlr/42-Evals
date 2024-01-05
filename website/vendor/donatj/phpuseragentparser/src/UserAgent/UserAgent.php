<?php

namespace donatj\UserAgent;

class UserAgent implements UserAgentInterface {

	/**
	 * @var string|null
	 */
	private $platform;
	/**
	 * @var string|null
	 */
	private $browser;
	/**
	 * @var string|null
	 */
	private $browserVersion;

	/**
	 * UserAgent constructor.
	 *
	 * @param string|null $platform
	 * @param string|null $browser
	 * @param string|null $browserVersion
	 */
	public function __construct( $platform, $browser, $browserVersion ) {
		$this->platform       = $platform;
		$this->browser        = $browser;
		$this->browserVersion = $browserVersion;
	}

	/**
	 * @return string|null
	 * @see \donatj\UserAgent\Platforms for a list of tested platforms
	 */
	public function platform() {
		return $this->platform;
	}

	/**
	 * @return string|null
	 * @see \donatj\UserAgent\Browsers for a list of tested browsers.
	 */
	public function browser() {
		return $this->browser;
	}

	/**
	 * The version string. Formatting depends on the browser.
	 *
	 * @return string|null
	 */
	public function browserVersion() {
		return $this->browserVersion;
	}
}
