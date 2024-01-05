# PHP User Agent Parser

[![Join the chat at https://gitter.im/PhpUserAgentParser/Lobby](https://badges.gitter.im/PhpUserAgentParser/Lobby.svg)](https://gitter.im/PhpUserAgentParser/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


[![Latest Stable Version](https://poser.pugx.org/donatj/phpuseragentparser/version)](https://packagist.org/packages/donatj/phpuseragentparser)
[![Total Downloads](https://poser.pugx.org/donatj/phpuseragentparser/downloads)](https://packagist.org/packages/donatj/phpuseragentparser)
[![License](https://poser.pugx.org/donatj/phpuseragentparser/license)](https://packagist.org/packages/donatj/phpuseragentparser)
[![ci.yml](https://github.com/donatj/phpUserAgent/actions/workflows/ci.yml/badge.svg?)](https://github.com/donatj/phpUserAgent/actions/workflows/ci.yml)


## What It Is

A simple, streamlined PHP user-agent parser!

Licensed under the MIT license: https://www.opensource.org/licenses/mit-license.php

## Upgrading to `1.*`

The new `1.*` release **does not break compatibility** with `0.*` and nothing need to change to upgrade. However, the global `parse_user_agent` is now deprecated; it has been replaced with the namespaced `\donatj\UserAgent\parse_user_agent` and functions exactly the same. You can easily replace any existing call to `parse_user_agent` with `\donatj\UserAgent\parse_user_agent`

In addition, 1.x adds a convenience object wrapper you may use should you prefer. More information on this is in the Usage section below.

## Why Use This

You have your choice in user-agent parsers. This one detects **all modern browsers** in a very light, quick, understandable fashion.
It is less than 200 lines of code, and consists of just three regular expressions!
It can also correctly identify exotic versions of IE others fail on.

It offers 100% unit test coverage, is installable via Composer, and is very easy to use.

## What It Does Not Do

This is not meant as a browser "knowledge engine" but rather a simple parser. Anything not adequately provided directly by the user agent string itself will simply not be provided by this.


### OS Versions

User-agent strings **are not** a reliable source of OS Version!

- Many agents simply don't send the information.
- Others provide varying levels of accuracy.
- Parsing Windows versions alone almost nearly doubles the size of the code.

I'm much more interested in keeping this thing *tiny* and accurate than adding niché features and would rather focus on things that can be **done well**.

All that said, there is the start of a [branch to do it](https://github.com/donatj/PhpUserAgent/tree/os_version_detection) I created for a client if you want to poke it, I update it from time to time, but frankly if you need to *reliably detect OS Version*, using user-agent isn't the way to do it. I'd go with JavaScript.

### Undetectable Browsers

- **Brave** - Brave is simply not differentiable from Chrome. This was a design decision on their part.

### Undetectable Platforms

- **iPadOS 13+** - Starting with iPadOS 13 and further hardened in 14, iPadOS returns the **exact** same string as macOS. It is no longer distinguishable by UA string. (See: [#69](https://github.com/donatj/PhpUserAgent/issues/69))

## Requirements

- **php**: >=5.4.0
- **ext-ctype**: *

## Installing

PHP User Agent is available through Packagist via Composer.

Install the latest version with:

```bash
composer require 'donatj/phpuseragentparser'
```

## Usage

The classic procedural use is as simple as:

```php
<?php

// if you're using composer
require __DIR__ . '/../vendor/autoload.php';

// v0 style global function - @deprecated
$uaInfo = parse_user_agent();
// or
// modern namespaced function
$uaInfo = donatj\UserAgent\parse_user_agent();

echo $uaInfo[donatj\UserAgent\PLATFORM] . PHP_EOL;
echo $uaInfo[donatj\UserAgent\BROWSER] . PHP_EOL;
echo $uaInfo[donatj\UserAgent\BROWSER_VERSION] . PHP_EOL;

```

The new object-oriented wrapper form:

```php
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

```

## Currently Detected Platforms

Predefined helper constants from `donatj\UserAgent\Platforms`  
  
| Constant | Platform |  
|----------|----------|  
| `Platforms::MACINTOSH` |  Macintosh |  
| `Platforms::CHROME_OS` |  Chrome OS |  
| `Platforms::LINUX` |  Linux |  
| `Platforms::WINDOWS` |  Windows |  
| `Platforms::ANDROID` |  Android |  
| `Platforms::BLACKBERRY` |  BlackBerry |  
| `Platforms::FREEBSD` |  FreeBSD |  
| `Platforms::IPAD` |  iPad |  
| `Platforms::IPHONE` |  iPhone |  
| `Platforms::IPOD` |  iPod |  
| `Platforms::KINDLE` |  Kindle |  
| `Platforms::KINDLE_FIRE` |  Kindle Fire |  
| `Platforms::NETBSD` |  NetBSD |  
| `Platforms::NEW_NINTENDO_3DS` |  New Nintendo 3DS |  
| `Platforms::NINTENDO_3DS` |  Nintendo 3DS |  
| `Platforms::NINTENDO_DS` |  Nintendo DS |  
| `Platforms::NINTENDO_SWITCH` |  Nintendo Switch |  
| `Platforms::NINTENDO_WII` |  Nintendo Wii |  
| `Platforms::NINTENDO_WIIU` |  Nintendo WiiU |  
| `Platforms::OPENBSD` |  OpenBSD |  
| `Platforms::PLAYBOOK` |  PlayBook |  
| `Platforms::PLAYSTATION_3` |  PlayStation 3 |  
| `Platforms::PLAYSTATION_4` |  PlayStation 4 |  
| `Platforms::PLAYSTATION_5` |  PlayStation 5 |  
| `Platforms::PLAYSTATION_VITA` |  PlayStation Vita |  
| `Platforms::SAILFISH` |  Sailfish |  
| `Platforms::SYMBIAN` |  Symbian |  
| `Platforms::TIZEN` |  Tizen |  
| `Platforms::WINDOWS_PHONE` |  Windows Phone |  
| `Platforms::XBOX` |  Xbox |  
| `Platforms::XBOX_ONE` |  Xbox One |

## Currently Detected Browsers

Predefined helper constants from `donatj\UserAgent\Browsers`  
  
| Constant | Browser |  
|----------|----------|  
| `Browsers::ADSBOT_GOOGLE` |  AdsBot-Google |  
| `Browsers::ANDROID_BROWSER` |  Android Browser |  
| `Browsers::APPLEBOT` |  Applebot |  
| `Browsers::BAIDUSPIDER` |  Baiduspider |  
| `Browsers::BINGBOT` |  bingbot |  
| `Browsers::BLACKBERRY_BROWSER` |  BlackBerry Browser |  
| `Browsers::BROWSER` |  Browser |  
| `Browsers::BUNJALLOO` |  Bunjalloo |  
| `Browsers::CAMINO` |  Camino |  
| `Browsers::CHROME` |  Chrome |  
| `Browsers::CURL` |  curl |  
| `Browsers::EDGE` |  Edge |  
| `Browsers::FACEBOOKEXTERNALHIT` |  facebookexternalhit |  
| `Browsers::FEEDVALIDATOR` |  FeedValidator |  
| `Browsers::FIREFOX` |  Firefox |  
| `Browsers::GOOGLEBOT` |  Googlebot |  
| `Browsers::GOOGLEBOT_IMAGE` |  Googlebot-Image |  
| `Browsers::GOOGLEBOT_VIDEO` |  Googlebot-Video |  
| `Browsers::HEADLESSCHROME` |  HeadlessChrome |  
| `Browsers::IEMOBILE` |  IEMobile |  
| `Browsers::IMESSAGEBOT` |  iMessageBot |  
| `Browsers::KINDLE` |  Kindle |  
| `Browsers::LYNX` |  Lynx |  
| `Browsers::MIDORI` |  Midori |  
| `Browsers::MIUIBROWSER` |  MiuiBrowser |  
| `Browsers::MSIE` |  MSIE |  
| `Browsers::MSNBOT_MEDIA` |  msnbot-media |  
| `Browsers::NETFRONT` |  NetFront |  
| `Browsers::NINTENDOBROWSER` |  NintendoBrowser |  
| `Browsers::OCULUSBROWSER` |  OculusBrowser |  
| `Browsers::OPERA` |  Opera |  
| `Browsers::PUFFIN` |  Puffin |  
| `Browsers::SAFARI` |  Safari |  
| `Browsers::SAILFISHBROWSER` |  SailfishBrowser |  
| `Browsers::SAMSUNGBROWSER` |  SamsungBrowser |  
| `Browsers::SILK` |  Silk |  
| `Browsers::TELEGRAMBOT` |  TelegramBot |  
| `Browsers::TIZENBROWSER` |  TizenBrowser |  
| `Browsers::TWITTERBOT` |  Twitterbot |  
| `Browsers::UC_BROWSER` |  UC Browser |  
| `Browsers::VALVE_STEAM_TENFOOT` |  Valve Steam Tenfoot |  
| `Browsers::VIVALDI` |  Vivaldi |  
| `Browsers::WGET` |  Wget |  
| `Browsers::WORDPRESS` |  WordPress |  
| `Browsers::YANDEX` |  Yandex |  
| `Browsers::YANDEXBOT` |  YandexBot |

More information is available at [Donat Studios](https://donatstudios.com/PHP-Parser-HTTP_USER_AGENT).