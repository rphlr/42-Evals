<?php
require_once("functions.php");

if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {
	$logged_in = true;
	$username = $_SESSION['user'];
} else {
	$logged_in = false;
	$username = 'guest';
}

$prefix = 'https://42evals.com/';
$cursus = $prefix . 'common-core/';

$left_menu = [
	'libft' => $cursus . 'libft',
	'ft_printf' => $cursus . 'ft_printf',
	'get_next_line' => $cursus . 'get_next_line',
	'born2beroot' => $cursus . 'born2beroot',
	'push_swap' => $cursus . 'push_swap',
	'so_long' => $cursus . 'so_long',
	'fract-ol' => $cursus . 'fract-ol',
	'FdF' => $cursus . 'fdf',
	'pipex' => $cursus . 'pipex',
	'minitalk' => $cursus . 'minitalk',
	'minishell' => $cursus . 'minishell',
	'Philosophers' => $cursus . 'philosophers',
	'netpractice' => $cursus . 'netpractice',
	'cub3d' => $cursus . 'cub3d',
	'miniRT' => $cursus . 'minirt',
	'CPP00' => $cursus . 'cpp00',
	'CPP01' => $cursus . 'cpp01',
	'CPP02' => $cursus . 'cpp02',
	'CPP03' => $cursus . 'cpp03',
	'CPP04' => $cursus . 'cpp04',
	'Inception' => $cursus . 'inception',
	'webserv' => $cursus . 'webserv',
	'ft_irc' => $cursus . 'ft_irc',
	'CPP05' => $cursus . 'cpp05',
	'CPP06' => $cursus . 'cpp06',
	'CPP07' => $cursus . 'cpp07',
	'CPP08' => $cursus . 'cpp08',
	'CPP09' => $cursus . 'cpp09',
	'ft_transcendence' => $cursus . 'ft_transcendence'
];

if ($logged_in) {
	$menu = [
		'Home' => $prefix,
		'Login Attempt Statistics' => $prefix . 'insights',
		'Give this repository a star. ⭐' => 'https://github.com/rphlr/42-Evals',
		'Follow me on github' => 'https://github.com/rphlr',
		'Add me on LinkedIn' => 'https://www.linkedin.com/in/rphlr/',
		'privacy policy' => $prefix . 'privacy'
	];

	if ($username == $_ENV['SECRET_ADMIN_USERNAME'])
		$menu['Admin Panel'] = $prefix . 'admin';
	$menu['Logout'] = $prefix . 'logout';

} else {
	$menu = [
		'Home' => $prefix,
		'Give this repository a star. ⭐' => 'https://github.com/rphlr/42-Evals',
		'Follow me on github' => 'https://github.com/rphlr',
		'Add me on LinkedIn' => 'https://www.linkedin.com/in/rphlr/',
		'privacy policy' => $prefix . 'privacy'
	];
}

?>