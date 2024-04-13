<?php
define('PATH', './');
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
	<title>Evaluation Sheets Hub 🎯</title>
	<link rel="shortcut icon" href="assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link rel="stylesheet" media="all" href="css/styles.css">
	<link rel="manifest" href="./manifest.json">
	<script src="js/js"></script>
	<script src="js/main.js"></script>
	<script src="js/script.js"></script>
</head>

<body>
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
	<?php require(PATH . "utils/header.php"); ?>
	<div class="container-item scale-team-container">
		<div class="row mt-4">
			<div class="scale-section-infos col-sm-12 scale-div">
				<h3 class="font-weight-bold text-uppercase text-center mt-4 pt-4"><br>
					42 Evaluation Sheets Hub 🎯
				</h3>
				<h5 class="text-muted text-center">Welcome to the heart of self-evaluation for 42 School projects! 📝
				</h5>
				<hr>
				<div class="p-0 scale-introduction dancer from-down" id="introduction">
					<p>Whether you're gearing up for a peer-evaluation or refining your code masterpiece, these sheets
						offer a
						sneak peek into the evaluation process, setting you up for success. 🌟</p>
					<p>Dive into my meticulously curated evaluation sheets, sourced directly from the official 42
						School, and
						fine-tune your projects to ace that evaluation. 42-Evals Web Page - your digital companion for
						project
						assessments, updated regularly for seamless access. 🖥️✨</p>
					<p><b>NEW !</b> You can now see the stats of the repository <a href="#funny-stats">here</a>. 📊</p>
					<hr>
					<h3 class="font-weight-bold mb-1">Evaluation Status</h3>
					<p>
						The table below provides an overview of the evaluation sheet statuses with their date of upload. 😊
					</p>
					<table class="table">
						<tr>
							<th>Project</th>
							<th>Version</th>
						</tr>
						<tr>
							<td><a href="Cursus/libft" title="Go to Libft ➡️">Libft</a></td>
							<td>26 December 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/ft_printf" title="Go to ft_printf ➡️">ft_printf</a></td>
							<td>10 January 2024</td>
						</tr>
						<tr>
							<td><a href="Cursus/get_next_line" title="Go to get_next_line ➡️">get_next_line</a></td>
							<td>18 December 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/born2beroot" title="Go to Born2beroot ➡️">Born2beroot</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/push_swap" title="Go to push_swap ➡️">push_swap</a></td>
							<td>8 January 2024</td>
						</tr>
						<tr>
							<td><a href="Cursus/so_long" title="Go to so_long ➡️">so_long</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/fract-ol" title="Go to fract-ol ➡️">fract-ol</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/fdf" title="Go to FdF ➡️">FdF</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/pipex"
									title="Go to pipex ➡️">pipex</a>
							</td>
							<td>8 January 2024</td>
						</tr>
						<tr>
							<td><a href="Cursus/minitalk" title="Go to minitalk ➡️">minitalk</a>
							</td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/minishell" title="Go to minishell ➡️">minishell</a>
							</td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/philosophers" title="Go to Philosophers ➡️">Philosophers</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/netpractice" title="Go to NetPractice ➡️">netpractice</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td>↓ <a href="#" onclick="showCPPModal(event)" title="Open details 👀">Open CPP details
									👀</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/cub3d" title="Go to cub3d ➡️">cub3d</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/minirt" title="Go to miniRT ➡️">miniRT</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/inception" title="Go to Inception ➡️">Inception</a>
							</td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/webserv" title="Go to webserv ➡️">webserv</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/ft_irc" title="Go to ft_irc ➡️">ft_irc</a></td>
							<td>August 2023</td>
						</tr>
						<tr>
							<td><a href="Cursus/ft_transcendence" title="Go to ft_transcendence ➡️">ft_transcendence</a>
							</td>
							<td>August 2023</td>
						</tr>
					</table>
				</div>
				<div id="CPPModal" class="modal">
					<div class="modal-content">
						<span class="close">&times;</span>
						<p>CPP Details 👇🏾</p>
						<table class="table">
							<tr>
								<th>Project</th>
								<th>Status</th>
							</tr>
							<tr>
								<td><a href="Cursus/cpp00" title="Go to CPP00 ➡️">CPP00</a>
								</td>
								<td>28 December 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp01" title="Go to CPP01 ➡️">CPP01</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp02" title="Go to CPP02 ➡️">CPP02</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp03" title="Go to CPP03 ➡️">CPP03</a>
								</td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp04" title="Go to CPP04 ➡️">CPP04</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp05" title="Go to CPP05 ➡️">CPP05</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp06" title="Go to CPP06 ➡️">CPP06</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp07" title="Go to CPP07 ➡️">CPP07</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp08" title="Go to CPP08 ➡️">CPP08</a></td>
								<td>August 2023</td>
							</tr>
							<tr>
								<td><a href="Cursus/cpp09" title="Go to CPP09 ➡️">CPP09</a></td>
								<td>28 December 2023</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="contributions">
					<h3 class="font-weight-bold mb-1">Contributing to Excellence 🤝</h3>
					<p>Your insight and expertise can help countless peers! If you've got an evaluation sheet that could
						illuminate the path to project perfection, here's how to share that beacon of knowledge:
					</p>
					<ol>
						<li>Fork the <a target="_blank" href="https://github.com/rphlr/42-Evals">repository</a>.</li>
						<li>Clone your fork and embark on your contribution journey.</li>
						<li>Add new enlightenment or polish existing treasures.</li>
						<li>Commit your wisdom with a meaningful message.</li>
						<li>Push your contributions upstream.</li>
						<li>Open a pull request to merge your light into the main beacon.</li>
					</ol>
				</div>
				<hr>
				<div class="p-0 scale-guidelines dancer from-down" id="navigating-the-sheets">
					<h3 class="font-weight-bold mb-1">Navigating the Sheets 🗺️</h3>
					<p>
						Each sheet is a roadmap to understanding the intricate expectations of each project. Use them to
						self-evaluate, discover areas for improvement, and prepare for the peer-evaluation journey that
						awaits.
						Review, reflect, and resonate with the criteria that define project success.
					</p>
				</div>
				<hr>
				<div class="p-0 scale-guidelines dancer from-down" id="Language">
					<h3 class="font-weight-bold mb-1">Language 🏳️</h3>
					<p>
						You can change the language of the evaluation sheets directly in your browser.
					</p>
				</div>
				<hr>
				<div class="p-0 scale-guidelines dancer from-down" id="resources">
					<h3 class="font-weight-bold mb-1">Complementary Resources 🌐</h3>
					<p>
						For a holistic learning journey, don't forget to explore the <a
							href="https://github.com/rphlr/42-Subjects">42-Subjects</a> repository. It's an expansive
						archive of
						official project PDFs, in both English and French, aligning perfectly with these evaluation
						sheets.
					</p>
				</div>
				<hr>
				<div class="dancer from-down" id="voice-matter">
					<h3 class="font-weight-bold mb-1">Your Voice Matters 📢</h3>
					<p>
						I'm in a constant state of learning and improvement, much like the code I write. If you've got
						ideas,
						feedback, or enhancements, I'm all ears. Open an issue, submit a pull request, or simply share
						your
						thoughts. Together, we grow.
					</p>
					<div class="project-attachments-list">
					</div>
				</div>
				<hr>
				<div class="dancer from-down" id="funny-stats">
					<h3 class="font-weight-bold mb-1">Funny Stats 📊</h3>
					<center>
						<b>Last stargazer:</b>
						<p><!--last_stargazer_start_HTML--><a href="https://github.com/LeMageoire"><img
                  src="https://avatars.githubusercontent.com/u/38554528?v=4&s=250"
                  target="_blank"></a><!--last_stargazer_end_HTML-->
						</p>
						<p>Thanks to <!--name_start_HTML--><a href="https://github.com/LeMageoire">LeMageoire</a><!--name_end_HTML-->
							for starring the repository! 🎉</p>
					</center>
					<b>Star Count: <a href="https://github.com/rphlr/42-Evals"
							target="_blank"><!--stars_start-->601<!--stars_end--></a> 🌟</b>
					<br />
					<p><b>Updates occur hourly. Last update :</b> <!--date_start_HTML-->13.04.2024, 14:15:15<!--date_end_HTML-->
						(CET)</p>
					<center>
						<div>
							<p><a href="https://github.com/rphlr/42-Evals" target="_blank"><img
										src="https://api.star-history.com/svg?repos=rphlr/42-Evals&type=Date&"
										style="width: 100%; height: auto;"></a>
							</p>
						</div>
					</center>
					<p>More stats are coming soon! 🤖</p>
					<!-- separation -->
				</div>
				<hr>
				<div class="dancer from-down" id="about-me">
					<p>Remember to give a star ⭐ to my repository if it helps you navigate the challenges of 42 School
						projects.
						Your support amplifies my reach and aids fellow students in finding this repository with ease.
						Happy coding,
						and may your evaluations be ever in your favor! 🚀</p>
				</div>
			</div>
		</div>
	</div>
	<br><br><br>
	<script src="js/script.js"></script>
</body>

</html>
