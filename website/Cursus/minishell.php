<?php
define('PATH', '../');
require(PATH . "utils/check_session.php");
require(PATH . "utils/show_popup.php");
require(PATH . "utils/menu.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>minishell correction</title>
	<link rel="shortcut icon" href="<?php echo PATH; ?>assets/favicons/favicon_no-bg.ico" type="image/x-icon">
	<link href="<?php echo PATH; ?>css/styles.css" media="all" rel="stylesheet" />
	<link rel="manifest" href="<?php echo PATH; ?>manifest.json">
	<script src="<?php echo PATH; ?>js/script.js"></script>
	<script src="<?php echo PATH; ?>js/js"></script>
	<script src="<?php echo PATH; ?>js/main.js"></script>
</head>

<body>
	<script>
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('<?php echo PATH; ?>js/service-worker.js')
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
				<h3 class="font-weight-bold text-uppercase text-center mt-4 pt-4">
					Scale for project

					<a target="_blank" href="https://projects.intra.42.fr/projects/42cursus-minishell">minishell</a>
				</h3>
				<h5 class="text-muted text-center">You should evaluate 2 students in this team</h5>
				<hr>
				<div class="p-0 scale-introduction dancer from-down" id="introduction-26341">
					<h3 class="font-weight-bold mb-1">Introduction</h3>
					<p>
						Please comply with the following rules:<br><br>- Remain polite, courteous, respectful and
						constructive
						throughout the <br> evaluation process. The well-being of the community depends on it.<br><br>-
						Identify with the student or group whose work is evaluated the possible <br> dysfunctions in
						their
						project. Take the time to discuss and debate the <br> problems that may have been
						identified.<br><br>-
						You must consider that there might be some differences in how your peers <br> might have
						understood
						the project's instructions and the scope of its <br> functionalities. Always keep an open mind
						and
						grade them as honestly as <br> possible. The pedagogy is useful only and only if the
						peer-evaluation
						is <br> done seriously.<br>
					</p>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="guidelines-26341">
					<h3 class="font-weight-bold mb-1">Guidelines</h3>
					<p>
						- Only grade the work that was turned in the Git repository of the evaluated <br> student or
						group.<br><br>- Double-check that the Git repository belongs to the student(s). Ensure that <br>
						the
						project is the one expected. Also, check that 'git clone' is used in an <br> empty
						folder.<br><br>-
						Check carefully that no malicious aliases was used to fool you and make you <br> evaluate
						something
						that is not the content of the official repository.<br><br>- To avoid any surprises and if
						applicable,
						review together any scripts used <br> to facilitate the grading (scripts for testing or
						automation).<br><br>- If you have not completed the assignment you are going to evaluate, you
						have
						<br> to read the entire subject prior to starting the evaluation process.<br><br>- Use the
						available
						flags to report an empty repository, a non-functioning <br> program, a Norm error, cheating, and
						so
						forth. <br> In these cases, the evaluation process ends and the final grade is 0, <br> or -42 in
						case
						of cheating. However, except for cheating, student are <br> strongly encouraged to review
						together the
						work that was turned in, in order <br> to identify any mistakes that shouldn't be repeated in
						the
						future.<br><br>- Remember that for the duration of the defense, no segfault,<br> no other
						unexpected,
						premature, uncontrolled or unexpected<br> termination of the program, else the final grade is 0.
						Use
						the<br> appropriate flag. <br> You should never have to edit any file except the configuration
						file if
						it exists.<br> If you want to edit a file, take the time to explicit the reasons with the <br>
						evaluated student and make sure both of you are okay with this.<br><br>- You must also verify
						the
						absence of memory leaks. Any memory allocated on the heap must<br> be properly freed before the
						end of
						execution.<br> You are allowed to use any of the different tools available on the computer, such
						as<br> leaks, valgrind, or e_fence. In case of memory leaks, tick the appropriate flag.<br>
					</p>
				</div>

				<hr>
				<div class="dancer from-down" id="attachments-26341">
					<h3 class="font-weight-bold mb-1">Attachments</h3>
					<div class="project-attachments-list">
					</div>

					<div class="project-attachments-list">
						<div class="project-attachment-item">
							<h4 class="attachment-name">
								<span class="icon-file"></span>
								<a target="_blank" href="https://github.com/rphlr/42-Subjects/">subject.pdf</a>
							</h4>
						</div>
					</div>

				</div>

			</div>
			<form class="simple_form form-horizontal" novalidate="novalidate" id="edit_scale_team_5680767"
				action="https://projects.intra.42.fr/projects/42cursus-minishell/project_sessions/3317/evaluations/1598/scales/26341/scale_teams/5680767"
				accept-charset="UTF-8" method="post">
				<div class="scale-section-answers col-sm-12 scale-div">
					<section class="scale-section-item dancer from-down" id="section-73339">
						<div class="section-header">
							<h3 class="font-weight-bold mb-1">Mandatory Part</h3>
							<p class="font-italic"></p>
						</div>
						<h4 class="scale-question-name">Compile</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Use "make -n" to see if compilation use "-Wall -Wextra -Werror".
								If not, select the "invalid compilation" flag.</li>
							<li>minishell compiles without any errors. If not, select the flag.</li>
							<li>The Makefile must not re-link. If not, select the flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][0][value]"
									id="radio_[scale_team][answers_attributes][0]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][0]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][0][value]"
									id="radio_[scale_team][answers_attributes][0]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][0]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Simple Command &amp; global variables</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute a simple command with an absolute path like /bin/ls, or any
								other command without any options.</li>
							<li>How many global variables are used? Why? Ask the evaluated student
								to give you a concrete example of why it feels mandatory or logical.</li>
							<li>Check the global variable. This global variable cannot provide any
								other information or data access than the number of a received signal.</li>
							<li>Test an empty command.</li>
							<li>Test only spaces or tabs.</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][1][value]"
									id="radio_[scale_team][answers_attributes][1]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][1]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][1][value]"
									id="radio_[scale_team][answers_attributes][1]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][1]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Arguments</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute a simple command with an absolute path like /bin/ls, or any
								other command with arguments but without any quotes or double quotes.</li>
							<li>Repeat multiple times with different commands and arguments.</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][2][value]"
									id="radio_[scale_team][answers_attributes][2]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][2]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][2][value]"
									id="radio_[scale_team][answers_attributes][2]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][2]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">echo</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute the echo command with or without arguments, or the -n option.</li>
							<li>Repeat multiple times with different arguments.</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][3][value]"
									id="radio_[scale_team][answers_attributes][3]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][3]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][3][value]"
									id="radio_[scale_team][answers_attributes][3]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][3]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">exit</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute exit command with or without arguments.</li>
							<li>Repeat multiple times with different arguments.</li>
							<li>Don't forget to relaunch the minishell</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][4][value]"
									id="radio_[scale_team][answers_attributes][4]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][4]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][4][value]"
									id="radio_[scale_team][answers_attributes][4]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][4]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Return value of a process</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute a simple command with an absolute path like /bin/ls, or any
								other command with arguments but without any quotes and double quotes.
								Then execute echo $?</li>
							<li>Check the printed value. You can do the same in bash in order to compare
								the results.</li>
							<li>Repeat multiple times with different commands and arguments. Try some
								wrong commands like '/bin/ls filethatdoesntexist'</li>
							<li>Try anything like expr $? + $?</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][5][value]"
									id="radio_[scale_team][answers_attributes][5]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][5]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][5][value]"
									id="radio_[scale_team][answers_attributes][5]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][5]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Signals</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>ctrl-C in an empty prompt should display a new line with a new prompt.</li>
							<li>ctrl-\ in an empty prompt should not do anything.</li>
							<li>ctrl-D in an empty prompt should quit minishell --&gt; RELAUNCH!</li>
							<li>ctrl-C in a prompt after you wrote some stuff should display a new line
								with a new prompt.</li>
							<li>The buffer should be clean too. Press "Enter" to make sure nothing from
								the previous line is executed.</li>
							<li>ctrl-D in a prompt after you wrote some stuff should not do anything.</li>
							<li>ctrl-\ in a prompt after you wrote some stuff should not do anything.</li>
							<li>Try ctrl-C after running a blocking command like cat without arguments or grep
								“something“.</li>
							<li>Try ctrl-\ after running a blocking command like cat without arguments or grep
								“something“.</li>
							<li>Try ctrl-D after running a blocking command like cat without arguments or grep
								“something“.</li>
							<li>Repeat multiple times using different commands.</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][6][value]"
									id="radio_[scale_team][answers_attributes][6]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][6]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][6][value]"
									id="radio_[scale_team][answers_attributes][6]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][6]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Double Quotes</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute a simple command with arguments and, this time, use also double
								quotes (you should try to include whitespaces too).</li>
							<li>Try a command like : echo "cat lol.c | cat &gt; lol.c"</li>
							<li>Try anything except $.</li>
							<li>If something crashes, select the "crash" flag.</li>
							<li>If something doesn't work, select the "incomplete work" flag.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][7][value]"
									id="radio_[scale_team][answers_attributes][7]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][7]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][7][value]"
									id="radio_[scale_team][answers_attributes][7]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][7]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Single Quotes</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute commands with single quotes as arguments.</li>
							<li>Try empty arguments.</li>
							<li>Try environment variables, whitespaces, pipes, redirection in the single quotes.</li>
							<li>echo '$USER' must print "$USER".</li>
							<li>Nothing should be interpreted.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][8][value]"
									id="radio_[scale_team][answers_attributes][8]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][8]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][8][value]"
									id="radio_[scale_team][answers_attributes][8]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][8]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">env</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Check if env shows you the current environment variables.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][9][value]"
									id="radio_[scale_team][answers_attributes][9]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][9]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][9][value]"
									id="radio_[scale_team][answers_attributes][9]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][9]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">export</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Export environment variables, create new ones and replace old ones.</li>
							<li>Check the result with env.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][10][value]"
									id="radio_[scale_team][answers_attributes][10]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][10]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][10][value]"
									id="radio_[scale_team][answers_attributes][10]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][10]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">unset</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Export environment variables, create new ones and replace old ones.</li>
							<li>Use unset to remove some of them.</li>
							<li>Check the result with env.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][11][value]"
									id="radio_[scale_team][answers_attributes][11]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][11]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][11][value]"
									id="radio_[scale_team][answers_attributes][11]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][11]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">cd</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Use the command cd to move the working directory and check if you are in
								the right directory with /bin/ls</li>
							<li>Repeat multiple times with working and not working cd</li>
							<li>Also, try '.' and '..' as arguments.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][12][value]"
									id="radio_[scale_team][answers_attributes][12]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][12]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][12][value]"
									id="radio_[scale_team][answers_attributes][12]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][12]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">pwd</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Use the command pwd.</li>
							<li>Repeat multiple times in different directories.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][13][value]"
									id="radio_[scale_team][answers_attributes][13]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][13]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][13][value]"
									id="radio_[scale_team][answers_attributes][13]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][13]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Relative Path</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute commands but this time use a relative path.</li>
							<li>Repeat multiple times in different directories with a complex
								relative path (lots of ..).</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][14][value]"
									id="radio_[scale_team][answers_attributes][14]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][14]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][14][value]"
									id="radio_[scale_team][answers_attributes][14]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][14]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Environment path</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute commands but this time without any path (ls, wc, awk and so forth).</li>
							<li>Unset the $PATH and ensure commands are not working anymore.</li>
							<li>Set the $PATH to a multiple directory value (directory1:directory2) and
								ensure that directories are checked in order from left to right.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][15][value]"
									id="radio_[scale_team][answers_attributes][15]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][15]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][15][value]"
									id="radio_[scale_team][answers_attributes][15]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][15]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Redirection</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute commands with redirections &lt; and/or &gt;</li>
							<li>Repeat multiple times with different commands and arguments and sometimes change &gt;
								with
								&gt;&gt;</li>
							<li>Check if multiple tries of the same redirections fail.</li>
							<li>Test &lt;&lt; redirection (it doesn't have to update the history).</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][16][value]"
									id="radio_[scale_team][answers_attributes][16]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][16]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][16][value]"
									id="radio_[scale_team][answers_attributes][16]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][16]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Pipes</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute commands with pipes like 'cat file | grep bla | more'</li>
							<li>Repeat multiple times with different commands and arguments.</li>
							<li>Try some wrong commands like 'ls filethatdoesntexist | grep bla | more'</li>
							<li>Try to mix pipes and redirections.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][17][value]"
									id="radio_[scale_team][answers_attributes][17]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][17]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][17][value]"
									id="radio_[scale_team][answers_attributes][17]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][17]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Go Crazy and history</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Type a command line, then use ctrl-C and press "Enter". The buffer should
								be clean and there should be nothing left to execute.</li>
							<li>Can we navigate through history using Up and Down? Can we retry some command?</li>
							<li>Execute commands that should not work like 'dsbksdgbksdghsd'.
								Ensure minishell doesn't crash and prints an error.</li>
							<li>'cat | cat | ls' should behave in a "normal way".</li>
							<li>Try to execute a long command with a ton of arguments.</li>
							<li>Have fun with that beautiful minishell and enjoy it!</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][18][value]"
									id="radio_[scale_team][answers_attributes][18]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][18]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][18][value]"
									id="radio_[scale_team][answers_attributes][18]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][18]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Environment variables</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Execute echo with some environment variables ($variable) as arguments.</li>
							<li>Check that $ is interpreted as an environment variable.</li>
							<li>Check that double quotes interpolate $.</li>
							<li>Check that USER exists. Otherwise, set it.</li>
							<li>echo "$USER" should print the value of the USER variable.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][19][value]"
									id="radio_[scale_team][answers_attributes][19]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][19]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][19][value]"
									id="radio_[scale_team][answers_attributes][19]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][19]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
					</section>
					<section class="scale-section-item dancer from-down" id="section-73340">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Bonus</h3>
							<p class="font-italic">Evaluate the bonus part if, and only if, the mandatory part has been
								entirely and perfectly done, and the error management handles unexpected
								or bad usage. In case all the mandatory points were not passed during the
								defense, bonus points must be totally ignored.
							</p>
						</div>
						<h4 class="scale-question-name">And, Or</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Use &amp;&amp;, || and parenthesis with commands and ensure minishell behaves
								the same way bash does.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][20][value]"
									id="radio_[scale_team][answers_attributes][20]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][20]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][20][value]"
									id="radio_[scale_team][answers_attributes][20]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][20]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Wildcard</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Use wildcards in arguments in the current working directory.</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][21][value]"
									id="radio_[scale_team][answers_attributes][21]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][21]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][21][value]"
									id="radio_[scale_team][answers_attributes][21]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][21]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Surprise! (or not...)</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Set the USER environment variable.</li>
							<li>echo "'$USER'" should print the value of the USER variable.</li>
							<li>echo '"$USER"' should print "$USER".</li>
						</ul>

						<p></p>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][22][value]"
									id="radio_[scale_team][answers_attributes][22]_true" type="radio" value="1">
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][22]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" class="checkbox-input"
									name="[scale_team][answers_attributes][22][value]"
									id="radio_[scale_team][answers_attributes][22]_false" type="radio" value="0"
									checked="checked">
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][22]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
					</section>
				</div>
				<div class="col-sm-12 scale-div pb-4">
					<div class="dancer from-down" id="ratings-26341">
						<h3 class="font-weight-bold mb-1">Ratings</h3>
						<p class="marked-title">Don’t forget to check the flag corresponding to the defense</p>
						<div class="btn-group block flags-buttons" data-radio-item="flag-small">
							<label class="btn btn-default btn-success label_flag_ok on-active positive"
								for="scale_team_flag_id_1" name="scale_team[flag_id]">
								<span class="iconf-check-4"></span>
								Ok
							</label>
							<label class="btn btn-default btn-success label_flag_outstanding_project on-active positive"
								for="scale_team_flag_id_9" name="scale_team[flag_id]">
								<span class="iconf-star-1"></span>
								Outstanding project
							</label>
						</div>
						<div class="btn-group block flags-buttons" data-radio-item="flag-small">
							<label class="btn btn-danger btn-default label_flag_empty_work negative on-active"
								for="scale_team_flag_id_2" name="scale_team[flag_id]">
								<span class="iconf-iconf-folder-1"></span>
								Empty work
							</label>
							<label class="btn btn-danger btn-default label_flag_incomplete_work negative on-active"
								for="scale_team_flag_id_3" name="scale_team[flag_id]">
								<span class="iconf-file-attention"></span>
								Incomplete work
							</label>
							<label class="btn btn-danger btn-default label_flag_invalid_compilation negative on-active"
								for="scale_team_flag_id_5" name="scale_team[flag_id]">
								<span class="iconf-skull-2"></span>
								Invalid compilation
							</label>
							<label class="btn btn-danger btn-default label_flag_norme negative on-active"
								for="scale_team_flag_id_6" name="scale_team[flag_id]">
								<span class="iconf-receipt-1"></span>
								Norme
							</label>
							<label class="btn btn-danger btn-default label_flag_cheat negative on-active"
								for="scale_team_flag_id_7" name="scale_team[flag_id]">
								<span class="iconf-layers"></span>
								Cheat
							</label>
							<label class="btn btn-danger btn-default label_flag_crash negative on-active"
								for="scale_team_flag_id_8" name="scale_team[flag_id]">
								<span class="iconf-bomb"></span>
								Crash
							</label>
							<label class="btn btn-danger btn-default label_flag_incomplete_group negative on-active"
								for="scale_team_flag_id_10" name="scale_team[flag_id]">
								<span class="iconf-user-delete-2"></span>
								Incomplete group
							</label>
							<label class="btn btn-danger btn-default label_flag_concerning_situation negative on-active"
								for="scale_team_flag_id_11" name="scale_team[flag_id]">
								<span class="iconf-alert-2"></span>
								Concerning situation
							</label>
							<label class="btn btn-danger btn-default label_flag_leaks negative on-active"
								for="scale_team_flag_id_12" name="scale_team[flag_id]">
								<span class="iconf-blood"></span>
								Leaks
							</label>
							<label class="btn btn-danger btn-default label_flag_forbidden_function negative on-active"
								for="scale_team_flag_id_13" name="scale_team[flag_id]">
								<span class="iconf-delete-2"></span>
								Forbidden function
							</label>
							<label
								class="btn btn-danger btn-default label_flag_can’t_support_/_explain_code negative on-active"
								for="scale_team_flag_id_14" name="scale_team[flag_id]">
								<span class="iconf-bubble-attention-4"></span>
								Can’t support / explain code
							</label>
						</div>
					</div>

				</div>
				<div class="scale-final-submit"><a href="https://github.com/rphlr/42-Evals">
						<input class="btn btn-primary btn-block font-weight-bold" type="button"
							value="Give this repository a star. ⭐" /></a>
				</div>
			</form>
		</div>
	</div>
</body>

</html>