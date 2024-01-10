<?php
session_start();
if (isset($_SESSION['error'])) {
	$error = $_SESSION['error'];
	echo "<script>alert('" . addslashes($error) . "');</script>";
	unset($_SESSION['error']);
}

if (isset($_SESSION['user'])) {
	header("Location: ./");
	exit();
}

define('PATH', './');
require(PATH . "utils/functions.php");

$message = isMobileDevice()
	? "<p>Hello and thank you for visiting. Due to certain constraints, the full experience of my site is challenging to navigate on mobile devices. I recommend accessing my site on a computer to enjoy the full features and ease of navigation. Don't worry, finding what you need is straightforward and simple!</p><hr>"
	: "<p>Hello, thank you for reaching out.</p>
	<p>Unfortunately, due to a request from 42Network, I've had to restrict online access to my correction site
		as
		it was deemed overly helpful for students. The purpose of corrections is to challenge and assess one's
		ability to execute a project. If evaluation sheets are too readily accessible, it undermines the essence
		and effectiveness of the pedagogical approach. I urge you to use the evaluations thoughtfully, focusing
		on
		learning rather than solely relying on them.</p>
	<p>Please understand that this change aims to maintain the integrity of the learning process. The new
		42-Evals
		site is now available under <b>restricted access</b>. For entry, a password is required. Remember, the
		password
		might have been 'forgotten' somewhere... I admit, I can be a bit absent-minded at times. ☹️</p>
	<p>Welcome to 42evals Version 2! Feel free to reach out to me with any questions, and I will respond when
		possible.</p>
	<br />
	<p>PS: My affection for cub3d is immense, it holds a special place in my heart 💖🥰</p>
	<hr>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="IE=Edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>Sign in to 42 Evals</title>
	<link rel="shortcut icon" href="assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link rel="stylesheet" media="all" href="./css/login.css">
	<link rel="manifest" href="./manifest.json">
	<script src="js/script.js"></script>
	<script src="js/js"></script>
	<script src="js/main.js"></script>
	<script src="js/script.js"></script>
</head>

<body>
	<div>
		<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('js/service-worker.js')
					.then(function (registration) {
						console.log('Service Worker registered successfully:', registration);
					})
					.catch(function (error) {
						console.log('Service Worker registration failed:', error);
					});
			}
		</script>
		<div class="overlay" id="overlay"></div>
		<div class="popup" id="popup">
			<h2>Important Update</h2>
			<?php echo $message; ?>
			<p><a href="mailto:42-evals@gmx.ch">Contact Me</a> - For regular updates and insights, <a
					href="https://github.com/rphlr" target="_blank">follow me on GitHub</a>. - Let's connect! <a
					href="https://linkedin.com/in/rphlr" target="_blank">Add me on LinkedIn</a>.</p>
			<button onclick="closePopup()">Close</button>
		</div>
		<button class="btn-primary" onclick="window.location.href='https\:\/\/github.com/rphlr'">Follow me on
			GitHub</button>
		<button class="btn-primary" onclick="window.location.href='https\:\/\/github.com/rphlr/42-Evals'"
			style="float: right;">Give this repository a star. ⭐</button>
		<div id="kc-header">
			<div id="kc-header-wrapper">Realm for 42 students</div>
		</div>
		<div>
			<header>
				<h1 id="kc-page-title">
				</h1>
			</header>
			<div id="kc-content">
				<div id="kc-content-wrapper">


					<div id="kc-form">
						<img id="logo" src="./assets/favicons/favicon_256x256_no-bg.png" />
						<div id="kc-form-wrapper">
							<form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="utils/login"
								method="post">
								<div>
									<div>
										<input tabindex="1" id="username" name="username" type="text" autocomplete="off"
											placeholder="Login or email" readonly maxlength="11">
									</div>

								</div>

								<div>
									<input tabindex="2" id="password" name="password" type="password" autofocus
										autocomplete="off" placeholder=Password aria-invalid="" />


								</div>

								<div class=" ">
									<div id="kc-form-options">
										<div class="checkbox" id="remember-me">
											<label>
												<input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"
													checked disabled> Remember me
											</label>
										</div>
									</div>

								</div>

								<div id="kc-form-buttons">
									<input type="hidden" id="id-hidden-input" name="credentialId" />
									<input tabindex="4" class="   " name="login" id="kc-login" type="submit"
										value="Sign In" />
								</div>
							</form>
						</div>
						<!-- Oh dear is that a comment ? -->
						<div class="">
							<a id="reset-password" tabindex="5" href="https://42evals.com/password_forgotten"
								style="color: #dddddd;">How on earth did I forget my password already...<br>Am I a
								goldfish?</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	<script>
		function handleSubmit(event) {
			event.preventDefault();
			window.location.href = 'index.html';
		}
	</script>
</body>

</html>