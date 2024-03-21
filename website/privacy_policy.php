<?php
require_once './vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable('./');
$dotenv->load();

session_start();
require("utils/menu.php");
?>

<!DOCTYPE html>

<html lang="en">

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>Password forgotten</title>
	<link rel="shortcut icon" href="assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link href="css/styles.css" media="all" rel="stylesheet" />
	<link rel="manifest" href="./manifest.json">
	<script src="js/script.js"></script>
	<script src="js/js"></script>
	<script src="js/main.js"></script>
	</headi>

<body>
	<?php require("utils/header.php"); ?>
	<div class="container-item scale-team-container">
		<h3 lass="font-weight-bold text-uppercase text-center mt-4 pt-4">Privacy Policy for 42evals App</h3>
		<p><em>Effective as of 5. January 2024</em></p>

		<p>I am committed to protecting the privacy of all users of the 42evals app. This Privacy Policy outlines the
			types of information that I collect and how it is used and safeguarded.</p>

		<h5 class="text-muted text-center">1. Information Collection</h5>
		<p>The 42evals app collects the following information from users:</p>
		<ul>
			<li><strong>Username and Password:</strong> These are collected when you log in to the app.</li>
			<li><strong>IP Address:</strong> Only a portion of your IP address is collected to ensure privacy and it is not stored in its entirety, preventing individual user identification.</li>
			<li><strong>User Agent Information:</strong> This includes details about your browser, browser version,
				operating system, and device type.</li>
			<li><strong>Referrer Information:</strong> If applicable, the source from which you accessed the app.</li>
		</ul>
		<p>This information is stored securely and is not shared with third parties.</p>

		<h5 class="text-muted text-center">2. Use of Information</h5>
		<p>The collected information is used for the following purposes:</p>
		<ul>
			<li>To facilitate user login and authentication.</li>
			<li>To maintain a secure and efficient app environment.</li>
			<li>For analytical purposes, such as understanding user demographics and app usage patterns.</li>
		</ul>

		<h5 class="text-muted text-center">3. Data Security</h5>
		<p>I take data security seriously and implement appropriate measures to protect your information against
			unauthorized access, alteration, disclosure, or destruction.</p>

		<h5 class="text-muted text-center">4. Data Retention</h5>
		<p>I retain the collected information for as long as necessary to provide the services requested by the user, or
			for other essential purposes such as complying with legal obligations and resolving disputes.</p>

		<h5 class="text-muted text-center">5. Changes to This Privacy Policy</h5>
		<p>This Privacy Policy may be updated from time to time. I will notify you of any changes by posting the new
			Privacy Policy on the app and updating the "effective as of" date at the top of this policy.</p>

		<h5 class="text-muted text-center">6. Contact Information</h5>
		<p>If you have any questions about this Privacy Policy, please feel free to contact me at <a href="mailto:42-evals@gmx.ch">42-evals@gmx.ch</a>.</p>
	</div>
</body>

</html>