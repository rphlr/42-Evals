<?php
if (!defined('PATH'))
	define('PATH', './');
?>

<?php if ($menu): ?>
	<div class="main-navbar">
		<div class="main-navbar-left">
			<div class="main-navbar-logo" data-turbolinks-scaffold="">
				<a href="<?php echo PATH; ?>"><img alt="42" src="<?php echo PATH; ?>assets/favicons/favicon_no-bg.ico">
				</a>
			</div>
			<span class="hidden-sidebars main-menu-trigger lines-button x" data-trigger-menu="">
				<span style="background-color: rgb(255, 255, 255);">≡</span>
			</span>
		</div>
		<div class="main-navbar-user-nav" data-turbolinks-scaffold="">
			<span class="dropdown">
				<a data-toggle="dropdown" href="#">
					<span data-login="<?php echo htmlspecialchars($username); ?>">
						<?php echo htmlspecialchars($username); ?>
					</span>
					<div class="user-profile-picture visible-sidebars"
						style="background-image: url(<?php echo PATH; ?>assets/images/no_picture.jpeg)">
					</div>
				</a>
				<ul aria-labelledby="User menu" class="dropdown-menu" role="menu">
					<?php foreach ($menu as $title => $url): ?>
						<li>
							<a href="<?php echo htmlspecialchars($url); ?>">
								<?php echo htmlspecialchars($title); ?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</span>
		</div>
	</div>
	<div class="page-sidebar left-main-container page-sidebar-fixed-left under-main-navbar">
		<div class="app-sidebar-left">
			<div class="marked-title">All evaluations</div>
			<div class="projects-menu-list">
				<?php foreach ($left_menu as $title => $url): ?>
					<a class="project-item sidebar-item" href="<?php echo htmlspecialchars($url); ?>">
						<?php echo htmlspecialchars($title); ?>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
<?php endif; ?>