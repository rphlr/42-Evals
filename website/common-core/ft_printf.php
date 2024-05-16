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
	<title>ft_printf correction</title>
	<link rel="shortcut icon" href="<?php echo PATH; ?>assets/favicons/favicon_no-bg.ico"
		type="image/x-icon">
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
					<br />Scale for project
					<a target="_blank" href="https://projects.intra.42.fr/projects/ft_printf">ft_printf</a>
				</h3>
				<h5 class="text-muted text-center">You should evaluate 1 student in this team</h5>
				<hr />
				<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
					<h3 class="font-weight-bold mb-1">Introduction</h3>
					<p>
						Please comply with the following rules:<br /><br />
						- Remain polite, courteous, respectful and constructive throughout the evaluation process.
						The well-being of the community depends on it.<br /><br />
						- Identify with the student or group whose work is evaluated the possible dysfunctions in
						their project. Take the time to discuss and debate the problems that may have been identified.
						<br /><br />
						- You must consider that there might be some differences in how your peers might have
						understood the project's instructions and the scope of its functionalities. Always keep an
						open mind and grade them as honestly as possible. The pedagogy is useful only and only if the
						peer-evaluation is done seriously.<br />
					</p>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="guidelines-24830">
					<h3 class="font-weight-bold mb-1">Guidelines</h3>
					<p>
						- Only grade the work that was turned in the Git repository of the evaluated student or
						group.<br /><br />
						- Double-check that the Git repository belongs to the student(s). Ensure that the project is
						the one expected. Also, check that 'git clone' is used in an empty folder.<br /><br />
						- Check carefully that no malicious aliases was used to fool you and make you evaluate
						something that is not the content of the official repository.<br /><br />
						- To avoid any surprises and if applicable, review together any scripts used to facilitate the
						grading (scripts for testing or automation).<br /><br />
						- If you have not completed the assignment you are going to evaluate, you have to read the
						entire subject prior to starting the evaluation process.<br /><br />
						- Use the available flags to report an empty repository, a non-functioning program, a Norm
						error, cheating, and so forth. In these cases, the evaluation process ends and the final
						grade is 0, or -42 in case of cheating. However, except for cheating, student are strongly
						encouraged to review together the work that was turned in, in order to identify any mistakes
						that shouldn't be repeated in the future.<br /><br />
						- Remember that for the duration of the defence, no segfault, no other unexpected, premature,
						uncontrolled or unexpected termination of the program, else the final grade is 0. Use the
						appropriate flag.<br />
						You should never have to edit any file except the configuration file if it exists. If you want
						to edit a file, take the time to explicit the reasons with the evaluated student and make sure
						both of you are okay with this.<br /><br />
						- You must also verify the absence of memory leaks. Any memory allocated on the heap must be
						properly freed before the end of execution.<br />
						You are allowed to use any of the different tools available on the computer, such as leaks,
						valgrind, or e_fence. In case of memory leaks, tick the appropriate flag.<br />
					</p>
				</div>
				<hr />
				<div class="dancer from-down" id="attachments-24830">
					<h3 class="font-weight-bold mb-1">Attachments</h3>
					<div class="project-attachments-list">
					</div>
					<div class="project-attachments-list">
						<div class="project-attachment-item">
							<h4 class="attachment-name">
								<span class="icon-file"></span>
								<a href="https://github.com/rphlr/42-Subjects/" target="_blank">subject.pdf</a>
							</h4>
						</div>
					</div>
				</div>
			</div>
			<form accept-charset="UTF-8" class="simple_form form-horizontal" id="edit_scale_team_5411828" method="post"
				novalidate="novalidate"><input name="utf8" type="hidden" value="✓" /><input name="_method" type="hidden"
					value="patch" /><input name="authenticity_token" type="hidden"
					value="6Ham6Zq7dWNKn0GqURyJ/9favA08IRL2ZZlqRe45A5XzMg8ElLpzR1Nr9YnMvzkgYRhOZfma8IhsTLDFrmK/QQ==" />
				<div class="scale-section-answers col-sm-12 scale-div">
					<section class="scale-section-item dancer from-down" id="section-70025">
						<div class="section-header">
							<h3 class="font-weight-bold mb-1">Mandatory Part</h3>
						</div>
						<h4 class="scale-question-name">Simple Conversion Management</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Simply check each conversion without any flags 'cspdiuxX%'</li>
							<li>Try special cases like 0, or smallest int, or empty string, or NULL pointer.</li>
							<li>Test multiple arguments/conversions.</li>
							<li>Test various conversions in the middle of a sentence (put other characters before
							and/or after).</li>
						</ul>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"><input class="form-control hidden" id="scale_team_answer_id"
										name="[scale_team][answers_attributes][2][id]" /></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"><input class="form-control hidden"
										id="scale_team_answer_question_id"
										name="[scale_team][answers_attributes][2][question_id]" value="236763" /></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									id="radio_[scale_team][answers_attributes][2]_true"
									name="[scale_team][answers_attributes][2][value]" type="radio" value="1" />
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][2]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" checked="checked" class="checkbox-input"
									id="radio_[scale_team][answers_attributes][2]_false"
									name="[scale_team][answers_attributes][2][value]" type="radio" value="0" />
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][2]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
						<h4 class="scale-question-name">Get Crazy</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Redo every previous test but this time verify that the return value matches the one of
							the original printf.</li>
							<li>Try any combination of conversions.</li>
							<li>Check what happens with a series of identical conversions following each other.</li>
						</ul>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"><input class="form-control hidden" id="scale_team_answer_id"
										name="[scale_team][answers_attributes][3][id]" /></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"><input class="form-control hidden"
										id="scale_team_answer_question_id"
										name="[scale_team][answers_attributes][3][question_id]" value="236764" /></div>
							</div>
							<div class="btn-group block">
								<input autocomplete="off" class="checkbox-input"
									id="radio_[scale_team][answers_attributes][3]_true"
									name="[scale_team][answers_attributes][3][value]" type="radio" value="1" />
								<label class="btn btn-success checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][3]_true">
									<span class="icon-check"></span>
									Yes
								</label>
								<input autocomplete="off" checked="checked" class="checkbox-input"
									id="radio_[scale_team][answers_attributes][3]_false"
									name="[scale_team][answers_attributes][3][value]" type="radio" value="0" />
								<label class="btn btn-danger checkbox-label light-bg"
									for="radio_[scale_team][answers_attributes][3]_false">
									<span class="icon-times"></span>
									No
								</label>
							</div>
						</div>
					</section>
					<section class="scale-section-item dancer from-down" id="section-70028">
						<div class="section-header">
							<hr />
							<h3 class="font-weight-bold mb-1">Bonus part</h3>
							<p class="font-italic">Evaluate the bonus part if, and only if, the mandatory part has been
							entirely and perfectly done, and the error management handles unexpected or bad usage. In
							case all the mandatory points were not passed during the defense, bonus points must be
							totally ignored.</p>
						</div>
						<h4 class="scale-question-name">Simple flags management</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Check the flags '.', '-' and 0.</li>
							<li>Check the %-d with INT_MIN</li>
							<li>Check the - flag with any value.</li>
							<li>Check the 0 flag like %04d.</li>
							<li>Check the '.' with multiple precisions.</li>
							<li>For every test, verify the return value matches the original one.</li>
							<li>For each working flag, give 1 point.</li>
							<li>If all the flags work, give 2 bonus points.</li>
						</ul>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"><input class="form-control hidden"
										name="[scale_team][answers_attributes][3][id]" type="hidden"
										id="scale_team_answer_id"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"><input class="form-control hidden" value="234698"
										name="[scale_team][answers_attributes][3][question_id]" type="hidden"
										id="scale_team_answer_question_id"></div>
							</div>
							<div class="marked-title text-center">Rate it from 0 (failed) through 5 (excellent)</div>
							<input autocomplete="off" class="star-range" data-star-range="" max="5"
								name="[scale_team][answers_attributes][3][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
						</div>
						<h4 class="scale-question-name"># + space</h4>
						<ul>
							<li>Check all the conversions with the flags '#', '+' and space with all the other flag combinations.</li>
							<li>For each working flag, give 1 point.</li>
							<li>If all the flags work, give 2 bonus points.</li>
						</ul>
						<div class="scale-question-answers">
							<div class="form-group hidden scale_team_answer_id">
								<div class="col-sm-10"><input class="form-control hidden"
										name="[scale_team][answers_attributes][3][id]" type="hidden"
										id="scale_team_answer_id"></div>
							</div>
							<div class="form-group hidden scale_team_answer_question_id">
								<div class="col-sm-10"><input class="form-control hidden" value="234698"
										name="[scale_team][answers_attributes][3][question_id]" type="hidden"
										id="scale_team_answer_question_id"></div>
							</div>
							<div class="marked-title text-center">Rate it from 0 (failed) through 5 (excellent)</div>
							<input autocomplete="off" class="star-range" data-star-range="" max="5"
								name="[scale_team][answers_attributes][3][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
							<hr />
						</div>
					</section>
				</div>
		</div>
		<div class="col-sm-12 scale-div pb-4">
			<div class="dancer from-down" id="ratings-24830">
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
					<label class="btn btn-danger btn-default label_flag_concerning_situation negative on-active"
						for="scale_team_flag_id_11" name="scale_team[flag_id]">
						<span class="iconf-alert-2"></span>
						Concerning situation
					</label>
					<label class="btn btn-danger btn-default label_flag_can’t_support_/_explain_code negative on-active"
						for="scale_team_flag_id_14" name="scale_team[flag_id]">
						<span class="iconf-bubble-attention-4"></span>
						Can’t support / explain code
					</label>
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