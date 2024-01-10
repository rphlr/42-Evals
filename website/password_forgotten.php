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
	<title>Password forgotten</title>
	<link rel="shortcut icon" href="/assets/favicons/favicon_no-bg.ico" type="image/x-icon">
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
					My Secret Password Notebook
				</h3>
				<h5 class="text-muted text-center">Oh no, not again! Why do I always forget my password like a goldfish?</h5>
					<hr />
					<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
						<h3 class="font-weight-bold mb-1">Since my memory is playing tricks on me, here's a clue:</h3>
						<br />
						<p>
							Remember the countless hours spent at École 42 in 2023, always diving into coding challenges? The clue is like our favorite project there, but with a twist.
						</p>
						<br />
						<!-- Look into the 42-Evals repository :) -->
						<p>
							<strong>PS:</strong> I've included extra hints in the source code of this website, so you can find it if you look closely.
						</p>
						<br />
						<p>
							<a href="./">Maybe I should try again?</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>


</html>