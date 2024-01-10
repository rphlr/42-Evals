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
	<title>pipex correction</title>
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

					<a target="_blank" href="https://projects.intra.42.fr/projects/pipex">pipex</a>
				</h3>
				<h5 class="text-muted text-center">You should evaluate 1 student in this team</h5>
				<hr />
				<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
					<h3 class="font-weight-bold mb-1">Introduction</h3>
					<p>
						Merci de respecter les règles suivantes :<br><br>- Restez polis, courtois, respectueux et
						constructifs pendant le processus<br> d'évaluation. Le bien-être de la communauté repose
						là-dessus.<br><br>- Identifiez avec la personne évaluée ou le groupe évalué les éventuels <br>
						dysfonctionnements de son travail. Prenez le temps d'en discuter et <br> débattez des problèmes
						identifiés.<br><br>- Vous devez prendre en compte qu'il peut y avoir de légères différences<br>
						d'interprétation entre les instructions du projet, son scope et ses <br> fonctionnalités. Gardez
						un esprit ouvert et notez de la manière la plus<br> honnête possible. La pédagogie n'est valide
						que si la peer-évaluation<br> est faite sérieusement.<br>
					</p>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="guidelines-31109">
					<h3 class="font-weight-bold mb-1">Guidelines</h3>
					<p>
						- Ne notez que ce qui est contenu dans le dépôt Git cloné de l'étudiant(e)<br> ou du
						groupe.<br><br>- Vérifiez que le dépôt Git appartient bien à l'étudiant(e) ou au groupe,<br> que
						le projet est bien celui attendu, et que "git clone" est utilisé <br> dans un dossier
						vide.<br><br>- Vérifiez scrupuleusement qu'aucun alias n'a été utilisé pour vous tromper <br> et
						assurez-vous que vous évaluez bien le rendu officiel.<br><br>- Afin d'éviter toute surprise,
						vérifiez avec l'étudiant(e) ou le groupe les <br> potentiels scripts utilisés pour faciliter
						l'évaluation (par exemple, des <br> scripts de tests ou d'automatisation).<br><br>- Si vous
						n'avez pas fait le projet que vous allez évaluer, vous devez lire <br> le sujet en entier avant
						de commencer l'évaluation.<br><br>- Utilisez les flags disponibles pour signaler un rendu vide,
						un programme <br> ne fonctionnant pas, une erreur de Norme, de la triche... Dans ces <br>
						situations, l'évaluation est terminée et la note est 0, ou -42 en cas de <br> triche. Cependant,
						à l'exception des cas de triche, vous êtes encouragé(e)s <br> à continuer la discussion sur le
						travail rendu, même si ce dernier est <br> incomplet. Ceci afin d'identifier les erreurs à ne
						pas reproduire dans le <br> futur.<br>
					</p>
				</div>

				<hr>
				<div class="dancer from-down" id="attachments-31109">
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
			<form class="simple_form form-horizontal" novalidate="novalidate" id="edit_scale_team_6227690"
				action="https://projects.intra.42.fr/projects/pipex/project_sessions/5990/evaluations/3743/scales/31109/scale_teams/6227690"
				accept-charset="UTF-8" method="post">
				<div class="scale-section-answers col-sm-12 scale-div">
					<section class="scale-section-item dancer from-down" id="section-85776">
						<div class="section-header">
							<h3 class="font-weight-bold mb-1">Tests préliminaires</h3>
							<p class="font-italic">Si un cas de triche est suspecté, la notation et l'évaluation
								prennent fin immédiatement. Pour le signaler, sélectionnez le flag "Cheat". Faites
								attention à l'utiliser avec calme, précaution et discernement.</p>
						</div>
						<h4 class="scale-question-name">Prérequis</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Vérifiez les points suivants :</p>

						<ul>
							<li>Les conditions d'accès à la soutenance sont respectées : personne(s)
								évaluée(s) présente(s), un rendu non vide lui appartenant bien, etc...</li>
							<li>Si aucun travail n'a été soumis (ou mauvais fichiers, mauvais répertoire,
								ou noms de fichiers erronés), la note est de 0 et le processus
								d'évaluation prend fin.</li>
							<li>Pas de dépôt vide (= rien dans le dépôt Git).</li>
							<li>Aucune erreur de Norme.</li>
							<li>Tricherie (= -42).</li>
							<li>Pas d'erreur de compilation ni de Makefile qui re-link.</li>
						</ul>

						<p>Si tous ces points sont validés, cochez "Oui" et continuez l'évaluation. <br>
							Sinon, utilisez le flag approprié à la fin de l'évaluation !</p>

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
					</section>
					<section class="scale-section-item dancer from-down" id="section-85777">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Instructions générales</h3>
							<p class="font-italic"></p>
						</div>
						<h4 class="scale-question-name">Instructions générales</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Si un crash ou une erreur se produit de manière inattendue (erreur de
								segmentation, bus error, affichage anormal, etc.), utilisez le flag
								"Crash" !</li>
							<li>Le Makefile compile l'exécutable avec les options demandées.</li>
							<li>L'exécutable est nommé "pipex".</li>
							<li>Aucune fonction interdite n'est utilisée.</li>
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
					</section>
					<section class="scale-section-item dancer from-down" id="section-85778">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Partie obligatoire</h3>
							<p class="font-italic">La commande "./pipex file1 cmd1 cmd2 file2"
								doit se comporter comme cette commande : "&lt; file1 cmd1 | cmd2 &gt; fichier2"
							</p>
						</div>
						<h4 class="scale-question-name">Gestion des erreurs et des arguments</h4>
						<p class="scale-section-guidelines">
						</p>
						<ul>
							<li>Le programme prend 4 arguments, ni plus, ni moins (sauf pour la partie
								bonus) et uniquement dans le bon ordre.</li>
							<li>La gestion des erreurs est correcte : fichiers (in)existants, droits
								des fichiers, binaire de commande (in)existants, etc.</li>
						</ul>

						<p>Si ces points sont respectés, cochez "Oui" et poursuivez l'évaluation.<br>
							Dans le cas contraire, l'évaluation s'arrête ici. Utilisez 'Incomplete work' <br>
							(rendu incomplet) ou tout autre flag approprié.</p>

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
						<h4 class="scale-question-name">Le programme</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le programme fait ce qui est demandé dans le sujet sans afficher des <br>
							informations/étapes supplémentaires par rapport à la commande shell.</p>

						<p>Faites vos propres tests et comparez les résultats du programme avec <br>
							ceux de la sortie de la commande originale. N'hésitez pas à regarder le <br>
							sujet et les exemples donnés.</p>

						<p>Si aucune erreur n'est détectée, cochez "Oui" et continuez. Dans le cas <br>
							contraire, l'évaluation s'arrête ici.</p>

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
					<section class="scale-section-item dancer from-down" id="section-85779">
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
						<h4 class="scale-question-name">Plusieurs pipes</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le programme gère l'utilisation de plusieurs pipes les uns après les <br>
							autres. <br>
							Comme pour la partie obligatoire, testez avec les commandes shell afin de <br>
							comparer avec la sortie du programme.</p>

						<p>Si c'est bon seulement pour 2 pipes dans la même commande mais pas pour 5, <br>
							ce bonus ne doit pas être compté.</p>

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
						<h4 class="scale-question-name">&lt;&lt; et &gt;&gt; avec le paramètre here_doc</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le programme réplique l'utilisation de &lt;&lt; et &gt;&gt;. </p>

						<p>Testez plusieurs fois quelque chose comme : <br>
							"CMD &lt;&lt; STOP_VALUE | CMD1 &gt;&gt; fichier1"</p>

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
					<div class="dancer from-down" id="ratings-31109">
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