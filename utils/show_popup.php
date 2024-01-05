<?php
$showPopup = isset($_COOKIE["first_login"]);
if ($showPopup)
	setcookie("first_login", "", time() - 3600, "/");
?>

<?php if ($showPopup): ?>
	<div class="overlay" id="overlay"></div>
	<div class="popup" id="popup">
		<h2>Well done!!</h2>
		<p>You just found the password!</p>
		<button onclick="closePopup()">Close</button>
	</div>
	<script>
		function closePopup() {
			document.getElementById('popup').style.display = 'none';
			document.getElementById('overlay').style.display = 'none';
		}
	</script>
<?php endif; ?>