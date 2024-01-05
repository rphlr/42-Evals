<?php

namespace donatj\UserAgent;

interface UserAgentInterface {

	/**
	 * @return string|null
	 * @see \donatj\UserAgent\Platforms for a list of tested platforms
	 */
	public function platform();

	/**
	 * @return string|null
	 * @see \donatj\UserAgent\Browsers for a list of tested browsers.
	 */
	public function browser();

	/**
	 * The version string. Formatting depends on the browser.
	 *
	 * @return string|null
	 */
	public function browserVersion();
}