<?php
define('PATH', '../');
require(PATH . "utils/check_session.php");
require(PATH . "utils/show_popup.php");
require(PATH . "utils/menu.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="IE=Edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>42 Evals - Page not found</title>
	<link rel="shortcut icon" href="../assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link rel="stylesheet" media="all" href="../css/styles.css">
	<link rel="manifest" href="../manifest.json">
	<script src="../js/js"></script>
	<script src="../js/main.js"></script>
	<script src="../js/script.js"></script>
</head>

<body>
	<script>
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('../js/service-worker.js')
				.then(function (registration) {
					console.log('Service Worker registered successfully:', registration);
				})
				.catch(function (error) {
					console.log('Service Worker registration failed:', error);
				});
		}
	</script>
	<?php require(PATH . "utils/header.php"); ?>
	<div class="container-item scale-team-container">
		<div class="row mt-4">
			<div class="scale-section-infos col-sm-12 scale-div">
				<h3 class="font-weight-bold text-uppercase text-center mt-4 pt-4">404 - Page not found
				</h3>
				<div class="p-0 scale-introduction dancer from-down" id="introduction">
					<p>Hmm... I can't find the page you're looking for. ☹️</p>
					<p>Go back to the <a href="../">home page</a>.</p>
				</div>
			</div>
		</div>
	</div>
</body>

</html>