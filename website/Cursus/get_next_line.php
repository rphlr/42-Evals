<?php
define('PATH', '../');
require(PATH . "utils/check_session.php");
require(PATH . "utils/show_popup.php");
require(PATH . "utils/menu.php");
?>

<!DOCTYPE html>
<html lang="en">
<script src="chrome-extension://hmflgigeigiejaogcgamkecmlibcpdgo/generic/inject.js"></script>

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta
		content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
		name="viewport">
	<title>get_next_line correction</title>
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
					Scale for project

					<a target="_blank" href="https://projects.intra.42.fr/projects/42cursus-get_next_line">get_next_line</a>
				</h3>
				<h5 class="text-muted text-center">You should evaluate 1 student in this team</h5>
				<hr />
				<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
					<h3 class="font-weight-bold mb-1">Introduction</h3>
					<p>
						Merci de respecter les règles suivantes:<br><br>- Restez polis, courtois, respectueux et
						constructifs pendant le processus<br> d'évaluation. Le bien-être de la communauté repose
						là-dessus.<br><br>- Identifiez avec la personne évaluée ou le groupe évalué les éventuels<br>
						dysfonctionnements de son travail. Prenez le temps d'en discuter et<br> débattez des problèmes
						identifiés.<br><br>- Vous devez prendre en compte qu'il peut y avoir de légères différences<br>
						d'interprétation entre les instructions du projet, son scope et ses<br> fonctionnalités. Gardez
						un esprit ouvert et notez de la manière la plus<br> honnête possible. La pédagogie n'est valide
						que si la peer-évaluation<br> est faite sérieusement.<br>
					</p>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="guidelines-30631">
					<h3 class="font-weight-bold mb-1">Guidelines</h3>
					<p>
						- Ne notez que ce qui est contenu dans le dépôt Git cloné de l'étudiant(e)<br> ou du
						groupe.<br><br>- Vérifiez que le dépôt Git appartient bien à l'étudiant(e) ou au groupe,<br> que
						le projet est bien celui attendu, et que "git clone" est utilisé<br> dans un dossier
						vide.<br><br>- Vérifiez scrupuleusement qu'aucun alias n'a été utilisé pour vous tromper<br> et
						assurez-vous que vous évaluez bien le rendu officiel.<br><br>- Afin d'éviter toute surprise,
						vérifiez avec l'étudiant(e) ou le groupe les<br> potentiels scripts utilisés pour faciliter
						l'évaluation (par exemple, des<br> scripts de tests ou d'automatisation).<br><br>- Si vous
						n'avez pas fait le projet que vous allez évaluer, vous devez lire<br> le sujet en entier avant
						de commencer l'évaluation.<br><br>- Utilisez les flags disponibles pour signaler un rendu vide,
						un programme<br> ne fonctionnant pas, une erreur de Norme, de la triche... Dans ces<br>
						situations, l'évaluation est terminée et la note est 0, ou -42 en cas de<br> triche. Cependant,
						à l'exception des cas de triche, vous êtes encouragé(e)s<br> à continuer la discussion sur le
						travail rendu, même si ce dernier est<br> incomplet. Ceci afin d'identifier les erreurs à ne pas
						reproduire dans le<br> futur.<br><br>- Pendant toute la durée de l'évaluation, aucun segfault ou
						autre arrêt<br> inattendu, prémature ou incontrôlé ne sera toléré. Auquel cas, la note<br>
						finale sera de 0. Utilisez le flag approprié.<br> Vous ne devriez jamais avoir à éditer un
						fichier hormis un fichier de<br> configuration si existant. Dans le cas ou vous souhaitez
						modifier un fichier,<br> vous devez expliciter clairement les raisons de l'édition et être en
						accord<br> avec l'étudiant(e) évalué(e) avant de faire quoi que ce soit.<br><br>- Vous devez
						aussi vérifier l'absence de fuites mémoire. Toute mémoire<br> allouée sur le tas doit être
						libérée proprement avant la fin de l'exécution<br> du programme.<br> Vous avez le droit
						d'utiliser tout outil disponible sur la machine tel que<br> leaks, valgrind ou e_fence. En cas
						de fuites mémoire, cochez le flag<br> approprié.<br>
					</p>
				</div>

				<hr>
				<div class="dancer from-down" id="attachments-30631">
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
			<form class="simple_form form-horizontal" novalidate="novalidate" id="edit_scale_team_6195387"
				action="https://projects.intra.42.fr/projects/42cursus-get_next_line/project_sessions/3313/evaluations/1590/scales/30631/scale_teams/6195387"
				accept-charset="UTF-8" method="post">
				<div class="scale-section-answers col-sm-12 scale-div">
					<section class="scale-section-item dancer from-down" id="section-84707">
						<div class="section-header">
							<h3 class="font-weight-bold mb-1">Partie obligatoire</h3>
							<p class="font-italic"></p>
						</div>
						<h4 class="scale-question-name">Norminette</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Exécutez la Norminette. En cas d'erreur, l'évaluation s'arrête ici.<br>
							Vous pouvez continuer et discuter de l'implémentation du code, mais cela<br>
							ne sera pas noté.</p>

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
						<h4 class="scale-question-name">Compilation</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Il devrait être possible de compiler le projet avec les flags habituels<br>
							et le flag -D BUFFER_SIZE. Il doit être possible de compiler ce projet avec et sans<br>
							ce dernier en plus des flags : -Wall -Wextra -Werror. S'il y a une erreur,<br>
							l'évaluation s'arrête ici. Vous pouvez continuer et discuter de la mise en<br>
							œuvre du code, mais la soutenance ne sera pas noté.</p>

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
						<h4 class="scale-question-name">Gestion d'erreur</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Effectuez au minimum les tests d'erreur suivants afin de vérifier la<br>
							gestion d'erreur du programmme.</p>

						<ul>
							<li>Passez un fd arbitraire a la fonction get_next_line, sur lequel il
								n'est pas possible de lire (par ex. 42) La fonction doit renvoyer NULL.</li>
							<li>Vérifiez les retours d'erreur de malloc, read et open.
								Si la partie "gestion d'erreur" est fausse, merci de ne pas noter la
								partie suivante, la correction s'arrête ici.
								Vous pouvez continuer et discuter de l'implémentation du code, mais cela
								ne sera pas noté.</li>
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
						<h4 class="scale-question-name">Tests</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>En temps qu'évaluateur(ice), vous devez écrire ou apporter un main qui vérifie :</p>

						<ul>
							<li>La valeur de retour de la fonction get_next_line est NULL en cas d'erreur.</li>
							<li>Sinon, la fonction renvoie la ligne lue, toujours avec un \n à la fin.</li>
						</ul>

						<p>Testez toutes les combinaisons des règles suivantes :</p>

						<ul>
							<li>Gros BUFFER_SIZE (&gt; 1024)</li>
							<li>Petit BUFFER_SIZE (&lt; 8, et 1)</li>
							<li>BUFFER_SIZE de la taille de la ligne à lire</li>
							<li>
								<p>1 de décalage (+/-) entre le BUFFER_SIZE et la ligne</p>
							</li>
							<li>
								<p>Lecture depuis stdin</p>
							</li>
							<li>
								<p>Lecture depuis un fichier</p>
							</li>
							<li>
								<p>(Multiple/Simple) ligne longue (2k+ caractères)</p>
							</li>
							<li>
								<p>(Multiple/Simple) ligne courte (&lt;4 caractères, et 1)</p>
							</li>
							<li>
								<p>(Multiple/Simple) Ligne vide</p>
							</li>
						</ul>

						<p>Ces tests devraient vous permettre de vérifier la validité du projet de<br>
							l'étudiant(e). En cas d'erreur, l'évaluation s'arrête ici.</p>

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
					</section>
					<section class="scale-section-item dancer from-down" id="section-84708">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Partie bonus</h3>
							<p class="font-italic">Les bonus ne seront examinés que si la partie obligatoire est
								excellente.
								Cela signifie que la partie obligatoire doit avoir été réalisée du début à
								la fin, avec une gestion d'erreur parfaite même en cas d'usage inattendu.
								Si tous les points obligatoires n'ont pas été attribués pendant cette
								soutenance, aucun point bonus ne sera comptabilisé.
							</p>
						</div>
						<h4 class="scale-question-name">Lecture sur multiples fd</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Répétez les tests effectués précédemment mais, cette fois, en lançant<br>
							plusieurs instances de get_next_line, chacune utilisant un descripteur<br>
							de fichier différent.<br>
							Assurez-vous que chaque get_next_line renvoie la bonne ligne.<br>
							Ajoutez un descripteur de fichier invalide pour tester la gestion<br>
							d'erreurs.</p>

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
						<h4 class="scale-question-name">Une seule variable statique</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Lisez le code et vérifiez qu'il n'y a bien qu'une seule variable statique.<br>
							Attribuez les points bonus si c'est le cas.</p>

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
					</section>
				</div>
				<div class="col-sm-12 scale-div pb-4">
					<div class="dancer from-down" id="ratings-30631">
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