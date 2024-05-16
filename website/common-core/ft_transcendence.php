<?php
define('PATH', '../');
require (PATH . "utils/check_session.php");
require (PATH . "utils/show_popup.php");
require (PATH . "utils/menu.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <meta
    content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
    name="viewport">
  <title>ft_transcendence correction</title>
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
  <?php require (PATH . "utils/header.php"); ?>
  <div class="container-item scale-team-container">
    <div class="row mt-4">
      <div class="scale-section-infos col-sm-12 scale-div">
        <h3 class="font-weight-bold text-uppercase text-center mt-4 pt-4">
          Scale for project

          <a target="_blank" href="https://projects.intra.42.fr/projects/ft_transcendence">ft_transcendence</a>
        </h3>
        <h5 class="text-muted text-center">You should evaluate 3 students in this team</h5>

        <hr>
        <div class="p-0 scale-introduction dancer from-down" id="introduction-18563">
          <h3 class="font-weight-bold mb-1">Introduction</h3>
          <p>
            - Only grade the work that was turned in the Git repository of the evaluated <br> student or
            group.<br><br>- Double-check that the Git repository belongs to the student(s). Ensure that <br> the
            project is the one expected. Also, check that 'git clone' is used in an <br> empty folder.<br><br>-
            Check carefully that no malicious aliases was used to fool you and make you <br> evaluate something
            that is not the content of the official repository.<br><br>- To avoid any surprises and if applicable,
            review together any scripts used <br> to facilitate the grading (scripts for testing or
            automation).<br><br>- If you have not completed the assignment you are going to evaluate, you have
            <br> to read the entire subject prior to starting the evaluation process.<br><br>- Use the available
            flags to report an empty repository, a non-functioning <br> program, a Norm error, cheating, and so
            forth. <br> In these cases, the evaluation process ends and the final grade is 0, <br> or -42 in case
            of cheating. However, except for cheating, student are <br> strongly encouraged to review together the
            work that was turned in, in order <br> to identify any mistakes that shouldn't be repeated in the
            future.<br><br>- Remember that for the duration of the defence, no segfault, no other <br> unexpected,
            premature, uncontrolled or unexpected termination of the <br> program, else the final grade is 0. Use
            the appropriate flag. <br> You should never have to edit any file except the configuration file if it
            <br> exists. If you want to edit a file, take the time to explicit the reasons <br> with the evaluated
            student and make sure both of you are okay with this.<br><br>- You must also verify the absence of
            memory leaks. Any memory allocated on <br> the heap must be properly freed before the end of
            execution. <br> You are allowed to use any of the different tools available on the computer, <br> such
            as leaks, valgrind, or e_fence. In case of memory leaks, tick the <br> appropriate flag.<br>
          </p>
        </div>

        <hr>
        <div class="dancer from-down" id="attachments-18563">
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
      <form class="simple_form form-horizontal" novalidate="novalidate" id="edit_scale_team_6616139"
        action="https://projects.intra.42.fr/projects/ft_transcendence/project_sessions/3323/evaluations/2011/scales/33398/scale_teams/6616139"
        accept-charset="UTF-8" method="post">
        <div class="scale-section-answers col-sm-12 scale-div">
          <section class="scale-section-item dancer from-down" id="section-90769">
            <div class="section-header">
              <h3 class="font-weight-bold mb-1">General instructions</h3>
              <p class="font-italic"></p>
            </div>
            <h4 class="scale-question-name">Preliminary tests</h4>
            <p class="scale-section-guidelines">
            </p>
            <ul>
              <li>Any credentials, API keys, environment variables must be set inside a .env
                file during the evaluation. In case any credentials, API keys are available
                in the git repository and outside of the .env file created during the evaluation, the evaluation
                stop
                and the mark is 0.</li>
              <li>Ensure the docker compose file is at the root of the repository.</li>
              <li>Run the "docker-compose up --build" command.</li>
              <li>Since the rating of this project is more flexible, do not stop the
                evaluation process unless you encounter a 500 error, a crash, or
                anything that actually doesn't work within the project scope.</li>
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
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][0][value]"
                  id="radio_[scale_team][answers_attributes][0]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][0]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][0][value]"
                  id="radio_[scale_team][answers_attributes][0]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][0]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Basic checks</h4>
            <p class="scale-section-guidelines">
            </p>
            <ul>
              <li>The website is available.</li>
              <li>The user can subscribe on the website.</li>
              <li>Registered users can log in.</li>
              <li>The website is a Single Page Application. The user can use the "Back"
                and "Forward" buttons of the web browser.</li>
              <li>You can browse the website using the latest version of Chrome.</li>
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
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][1][value]"
                  id="radio_[scale_team][answers_attributes][1]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][1]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][1][value]"
                  id="radio_[scale_team][answers_attributes][1]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][1]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
          </section>
          <section class="scale-section-item dancer from-down" id="section-90770">
            <div class="section-header">
              <hr>
              <h3 class="font-weight-bold mb-1">The website</h3>
              <p class="font-italic"></p>
            </div>
            <h4 class="scale-question-name">Security concerns</h4>
            <p class="scale-section-guidelines">
            </p>
            <ul>
              <li>Ensure that the website is secured. </li>
              <li>Be carefull about TLS. If there is a backend or any other features, it must be available.</li>
              <li>Check if there is a database the passwords must be hashed. </li>
              <li>Check the server for server-side validation/sanitization on forms and any user input.</li>
              <li>Ensure the security measures are properly implemented and thoroughly tested. </li>
              <li>If there is any error, the evaluation ends now.</li>
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
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][2][value]"
                  id="radio_[scale_team][answers_attributes][2]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][2]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][2][value]"
                  id="radio_[scale_team][answers_attributes][2]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][2]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
          </section>
          <section class="scale-section-item dancer from-down" id="section-90771">
            <div class="section-header">
              <hr>
              <h3 class="font-weight-bold mb-1">The game</h3>
              <p class="font-italic"></p>
            </div>
            <h4 class="scale-question-name">Local game</h4>
            <p class="scale-section-guidelines">
            </p>
            <ul>
              <li>You should be able to use this game locally on the same computer using the keyboard. </li>
              <li>Each player should be able to utilize a section of the keyboard. </li>
              <li>You must also be able to initiate a tournament, and the tournament should
                offer a matchmaking system to connect local players.</li>
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
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][3][value]"
                  id="radio_[scale_team][answers_attributes][3]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][3]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][3][value]"
                  id="radio_[scale_team][answers_attributes][3]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][3]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Gameplay</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>The game itself must be playable and respect the original Pong game. <br>
              The controls must be intuitive or correctly explained (with some rules or <br>
              manual). When a game is over, either a kind of end-game screen is <br>
              displayed or the game page just exits.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][4][value]"
                  id="radio_[scale_team][answers_attributes][4]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][4]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][4][value]"
                  id="radio_[scale_team][answers_attributes][4]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][4]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Lags &amp; disconnects</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>Unexpected disconnections and lags have to be handled. The game and the <br>
              website must not crash when a user is experiencing lags or is disconnected. <br>
              Handling such issues in an efficient way is appreciated but not mandatory:</p>

            <ul>
              <li>Pause the game for a defined duration.</li>
              <li>Disconnected users can reconnect.</li>
              <li>Lagging users can catch up to the match.</li>
              <li>And so forth.
                Any solution is acceptable. The only requirement is: the game should not
                crash.</li>
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
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][5][value]"
                  id="radio_[scale_team][answers_attributes][5]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][5]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][5][value]"
                  id="radio_[scale_team][answers_attributes][5]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][5]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
          </section>
          <section class="scale-section-item dancer from-down" id="section-90772">
            <div class="section-header">
              <hr>
              <h3 class="font-weight-bold mb-1">Modules</h3>
              <p class="font-italic">For this section, it is crucial to thoroughly read the PDF document detailing
                the requirements for each module, and provide clear and precise explanations for each choice made.
                In case of any doubt, do not hesitate to stop.</p>
            </div>
            <h4 class="scale-question-name">Major module 01</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][6][value]"
                  id="radio_[scale_team][answers_attributes][6]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][6]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][6][value]"
                  id="radio_[scale_team][answers_attributes][6]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][6]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 02</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][7][value]"
                  id="radio_[scale_team][answers_attributes][7]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][7]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][7][value]"
                  id="radio_[scale_team][answers_attributes][7]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][7]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 03</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][8][value]"
                  id="radio_[scale_team][answers_attributes][8]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][8]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][8][value]"
                  id="radio_[scale_team][answers_attributes][8]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][8]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 04</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][9][value]"
                  id="radio_[scale_team][answers_attributes][9]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][9]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][9][value]"
                  id="radio_[scale_team][answers_attributes][9]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][9]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 05</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][10][value]"
                  id="radio_[scale_team][answers_attributes][10]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][10]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][10][value]"
                  id="radio_[scale_team][answers_attributes][10]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][10]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 06</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][11][value]"
                  id="radio_[scale_team][answers_attributes][11]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][11]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][11][value]"
                  id="radio_[scale_team][answers_attributes][11]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][11]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
            <h4 class="scale-question-name">Module 07</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 minor modules, as specified <br>
              in the subject. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="btn-group block">
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][12][value]"
                  id="radio_[scale_team][answers_attributes][12]_true" type="radio" value="1">
                <label class="btn btn-success checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][12]_true">
                  <span class="icon-check"></span>
                  Yes
                </label>
                <input autocomplete="off" class="checkbox-input" name="[scale_team][answers_attributes][12][value]"
                  id="radio_[scale_team][answers_attributes][12]_false" type="radio" value="0" checked="checked">
                <label class="btn btn-danger checkbox-label light-bg"
                  for="radio_[scale_team][answers_attributes][12]_false">
                  <span class="icon-times"></span>
                  No
                </label>
              </div>
            </div>
          </section>
          <section class="scale-section-item dancer from-down" id="section-90773">
            <div class="section-header">
              <hr>
              <h3 class="font-weight-bold mb-1">Bonus</h3>
              <p class="font-italic">Evaluate the bonus part if, and only if, the mandatory part has been
                entirely and perfectly done, and the error management handles unexpected
                or bad usage. In case all the mandatory points were not passed during the
                defense, bonus points must be totally ignored.
              </p>
            </div>
            <h4 class="scale-question-name">Extra Module</h4>
            <p class="scale-section-guidelines">
            </p>
            <p>You must now verify the extra chosen module(s) with each group participant. <br>
              You must comprehensively understand everything that will be explained, <br>
              with the subject PDF as your reference. The obligations for each module <br>
              are clearly stated in the subject's PDF. </p>

            <p>Do not hesitate to ask any questions and request a demonstration of the <br>
              proper functioning of these module(s).</p>

            <p>As a reminder, one major module is equivalent to 2 points. One minor module is <br>
              equivalent to 1 point. </p>

            <p>A module is considered valid under the following criteria:</p>

            <ul>
              <li>There are no issues with the proper functioning of the presented module(s).</li>
              <li>We understand how it works and why it was chosen.</li>
              <li>No errors are visible</li>
              <li>A comprehensive explanation allows for a detailed understanding of these module(s).</li>
            </ul>

            <p>We would like to remind you that this is an important project, and that it is essential <br>
              to carry out this evaluation properly.</p>

            <p></p>
            <div class="scale-question-answers">
              <div class="form-group hidden scale_team_answer_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="form-group hidden scale_team_answer_question_id">
                <div class="col-sm-10"></div>
              </div>
              <div class="marked-title text-center">Rate it from 0 (failed) through 5 (excellent)</div>
              <input autocomplete="off" class="star-range" data-star-range="" max="5"
                name="[scale_team][answers_attributes][13][value]" step="1" type="range" value="0"
                style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
              <div class="rangeslider rangeslider--horizontal" id="js-rangeslider-0" style="">
                <div class="rangeslider__fill" style="width: 20px;"></div>
                <div class="rangeslider__handle" style="left: 0px;"></div>
              </div>
              <hr>
            </div>
          </section>
        </div>
        <div class="col-sm-12 scale-div pb-4">
          <div class="dancer from-down" id="ratings-18563">
            <h3 class="font-weight-bold mb-1">Ratings</h3>
            <p class="marked-title">Don’t forget to check the flag corresponding to the defense</p>
            <div class="btn-group block flags-buttons" data-radio-item="flag-small">
              <label class="btn btn-default btn-success label_flag_ok on-active positive" for="scale_team_flag_id_1"
                name="scale_team[flag_id]">
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
                <span class="iconf-file-1"></span>
                Empty work
              </label>
              <label class="btn btn-danger btn-default label_flag_incomplete_work negative on-active"
                for="scale_team_flag_id_3" name="scale_team[flag_id]">
                <span class="iconf-file-attention"></span>
                Incomplete work
              </label>
              <label class="btn btn-danger btn-default label_flag_cheat negative on-active" for="scale_team_flag_id_7"
                name="scale_team[flag_id]">
                <span class="iconf-layers"></span>
                Cheat
              </label>
              <label class="btn btn-danger btn-default label_flag_crash negative on-active" for="scale_team_flag_id_8"
                name="scale_team[flag_id]">
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
              <label class="btn btn-danger btn-default label_flag_forbidden_function negative on-active"
                for="scale_team_flag_id_13" name="scale_team[flag_id]">
                <span class="iconf-delete-2"></span>
                Forbidden function
              </label>
              <label class="btn btn-danger btn-default label_flag_can’t_support_/_explain_code negative on-active"
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