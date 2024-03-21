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
require(PATH . "utils/menu.php");
?>

<!DOCTYPE html>

<html lang="en">

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>Access Denied</title>
	<link rel="shortcut icon" href="assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link href="css/styles.css" media="all" rel="stylesheet" />
	<link rel="manifest" href="manifest.json">
	<script src="js/script.js"></script>
	<script src="js/js"></script>
	<script src="js/main.js"></script>
</head>

<body>
	<?php require(PATH . "utils/header.php"); ?>
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
	<div class="container-item scale-team-container">
		<div class="row mt-4">
			<div class="scale-section-infos col-sm-12 scale-div">
				<h3 class="font-weight-bold text-uppercase text-center mt-4 pt-4">
					Access Denied, <br />You have written the wrong password.
				</h3>
				<h5 class="text-muted text-center">Oh no, not again! Why do I always forget my password like a goldfish?</h5>
					<hr />
					<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
						<p>
							Hmm... I think it was something like "HelloDarknessMyOldFriend" but I'm not sure.
						</p>
	  					<!-- Note to self: Read my GitHub profile description -->
						<p>
							Click <a href="/utils/fast_login">here</a> for a fast login.
						</p>
						<p>
							By popular demand, it's finally here! Visit my <a href="https://github.com/rphlr/42-Evals/wiki">wiki page</a> for the comprehensive solution.
						</p>
							<a href="./">Maybe you should try again?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>
