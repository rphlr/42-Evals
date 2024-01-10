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
	<title>CPP Module 00 correction</title>
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

					<a target="_blank" href="https://projects.intra.42.fr/projects/cpp-module-00">CPP Module 00</a>
				</h3>
				<h5 class="text-muted text-center">You should evaluate 1 student in this team</h5>
				<hr />
				<div class="p-0 scale-introduction dancer from-down" id="introduction-24830">
					<h3 class="font-weight-bold mb-1">Introduction</h3>
					<p>
						Merci de respecter les règles suivantes:<br><br>- Restez polis, courtois, respectueux et
						constructifs pendant le processus<br> d'évaluation. Le bien-être de la communauté repose
						là-dessus.<br><br>- Identifiez avec la personne évaluée ou le groupe évalué les éventuels <br>
						dysfonctionnements de son travail. Prenez le temps d'en discuter et <br> débattez des problèmes
						identifiés.<br><br>- Vous devez prendre en compte qu'il peut y avoir de légères différences<br>
						d'interprétation entre les instructions du projet, son scope et ses <br> fonctionnalités. Gardez
						un esprit ouvert et notez de la manière la plus<br> honnête possible. La pédagogie n'est valide
						que si la peer-évaluation<br> est faite sérieusement.<br>
					</p>
				</div>
				<div class="p-0 scale-guidelines dancer from-down" id="guidelines-29673">
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
						pas reproduire dans le <br> futur.<br><br>- Si le sujet requiert un fichier de configuration,
						vous ne devriez jamais <br> avoir à le modifier. Si vous souhaitez éditer un fichier, prenez le
						temps <br> d'expliquer pourquoi à la personne évaluée et de vous assurer que vous avez <br> son
						accord.<br><br>- Vous devez aussi vérifier l'absence de fuites mémoire. Toute mémoire <br>
						allouée sur le tas doit être libérée proprement avant la fin de l'exécution <br> du programme.
						<br> Vous avez le droit d'utiliser tout outil disponible sur la machine tel que <br> leaks,
						valgrind ou e_fence. En cas de fuites mémoire, cochez le flag <br> approprié.<br>
					</p>
				</div>

				<hr>
				<div class="dancer from-down" id="attachments-29673">
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
						<div class="project-attachment-item">
							<h4 class="attachment-name">
								<span class="icon-file"></span>
								<a target="_blank"
									href="https://cdn.intra.42.fr/document/document/22388/Account.hpp">Account.hpp</a>
							</h4>
						</div>
						<div class="project-attachment-item">
							<h4 class="attachment-name">
								<span class="icon-file"></span>
								<a target="_blank"
									href="https://cdn.intra.42.fr/document/document/22389/19920104_091532.log">19920104_091532.log</a>
							</h4>
						</div>
						<div class="project-attachment-item">
							<h4 class="attachment-name">
								<span class="icon-file"></span>
								<a target="_blank"
									href="https://cdn.intra.42.fr/document/document/22390/tests.cpp">tests.cpp</a>
							</h4>
						</div>
					</div>

				</div>

			</div>
			<form class="simple_form form-horizontal" novalidate="novalidate" id="edit_scale_team_6213840"
				action="https://projects.intra.42.fr/projects/cpp-module-00/project_sessions/3324/evaluations/1601/scales/29673/scale_teams/6213840"
				accept-charset="UTF-8" method="post">
				<div class="scale-section-answers col-sm-12 scale-div">
					<section class="scale-section-item dancer from-down" id="section-81811">
						<div class="section-header">
							<h3 class="font-weight-bold mb-1">Tests préliminaires</h3>
							<p class="font-italic">Si un cas de triche est suspecté, la notation et l'évaluation
								prennent fin immédiatement. Pour le signaler, sélectionnez le flag "Cheat". Faites
								attention à l'utiliser avec calme, précaution et discernement.</p>
						</div>
						<h4 class="scale-question-name">Prérequis</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le code doit compiler avec c++ et les flags -Wall -Wextra -Werror<br>
							Pour rappel, ce projet doit suivre le standard C++98. Par conséquent, <br>
							des fonctions C++11 (ou autre standard) et les containers ne sont PAS <br>
							attendus.</p>

						<p>Ne notez pas l'exercice si vous trouvez :</p>

						<ul>
							<li>Une fonction implémentée dans un fichier d'en-tête (sauf pour
								les fonctions templates).</li>
							<li>Un Makefile compilant sans les flags demandés et/ou avec autre
								chose que c++.</li>
						</ul>

						<p>Sélectionnez le flag "Fonction interdite" (Forbidden function) si <br>
							vous rencontrez :</p>

						<ul>
							<li>L'utilisation d'une fonction "C" (*alloc, *printf, free).</li>
							<li>L'utilisation d'une fonction interdite dans le projet.</li>
							<li>L'utilisation de "using namespace &lt;ns_name&gt;" ou du mot-clé "friend".</li>
							<li>L'utilisation d'une bibliothèque externe, ou de fonctionnalités
								propres aux versions postérieures à C++98.</li>
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
					</section>
					<section class="scale-section-item dancer from-down" id="section-81812">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Exercice 00 : Megaphone</h3>
							<p class="font-italic">Cet exercice est un échauffement pour découvrir les I/O en C++.</p>
						</div>
						<h4 class="scale-question-name">Fonctionnement</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le but de cet exercice est de développer un to_upper ayant un comportement <br>
							spécifique si lancé sans paramètre.<br>
							Il doit être résolu avec une approche C++ (string/upper).</p>

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
					<section class="scale-section-item dancer from-down" id="section-81813">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Exercice 01 : My Awesome Phonebook</h3>
							<p class="font-italic">Cet exercice est une première approche pour écrire une classe simple
								et
								l'utiliser dans un programme interactif.
								Si l'exercice ne fonctionne pas parfaitement, notez ce qui peut l'être.
							</p>
						</div>
						<h4 class="scale-question-name">Gestion d'erreur</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Il y a un peu de gestion d'erreur à faire dans ce programme mais les comportements ne sont
							pas précisés dans le sujet. Quitter le programme proprement ou gérer les erreurs est ok. Un
							segfault ne l'est pas ! :D</p>

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
								name="[scale_team][answers_attributes][3][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
							<hr>
						</div>
						<h4 class="scale-question-name">La commande EXIT</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Notez la commande EXIT en vous basant sur ce qui est demandé dans le sujet.</p>

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
						<h4 class="scale-question-name">Visibilité</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Les attributs de la classe Contact doivent être privés. La classe doit <br>
							exposer les accesseurs correspondants. Vérifiez également que tout ce <br>
							qui n'est utilisé que dans une classe (et pas seulement la classe Contact) <br>
							est privé et le reste public. Les débutants ont tendance à tout mettre en <br>
							public. C'est ce que vous devez vérifier ici.</p>

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
								name="[scale_team][answers_attributes][4][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
							<hr>
						</div>
						<h4 class="scale-question-name">La classe Contact et la classe Phonebook</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le code doit inclure une classe Contact (ou autre nom).<br>
							La classe doit contenir les attributs demandés.<br>
							Le code doit contenir une classe Phonebook avec un tableau de Contacts à <br>
							l'intérieur.</p>

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
						<h4 class="scale-question-name">Boucle de Read/Eval</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Le programme doit proposer une sorte de boucle read/eval : <br>
							Lecture puis traitement d'entrée, ensuite attente de nouvelle entrée jusqu'à <br>
							recevoir une commande EXIT.<br>
							La boucle devrait être faite de manière C++ (std::cin) !</p>

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
						<h4 class="scale-question-name">La commande ADD</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Notez la commande ADD en vous basant sur ce qui est demandé dans le sujet.</p>

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
								name="[scale_team][answers_attributes][7][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
							<hr>
						</div>
						<h4 class="scale-question-name">La commande SEARCH</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Notez la commande SEARCH en vous basant sur ce qui est demandé dans le sujet. Une légère
							divergence dans le format attendu n'est pas importante. Cette partie vise à utiliser les
							"iomanips" en C++ et c'est ce sur quoi vous devez vous concentrer.</p>

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
								name="[scale_team][answers_attributes][8][value]" step="1" type="range" value="0"
								style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;">
							<hr>
						</div>
					</section>
					<section class="scale-section-item dancer from-down" id="section-81814">
						<div class="section-header">
							<hr>
							<h3 class="font-weight-bold mb-1">Exercice 02 : Le boulot de vos rêves</h3>
							<p class="font-italic">Le but de cet exercice est de récupérer les informations cachées au
								milieu du bruit et d'insérer du code dans un contexte existant.</p>
						</div>
						<h4 class="scale-question-name">Avez-vous sauvé le monde ?</h4>
						<p class="scale-section-guidelines">
						</p>
						<p>Cet exercice est plutôt simple. Soit Account.cpp marche, soit il ne marche <br>
							pas. Comparez la sortie du programme avec le fichier de logs fourni. <br>
							Toute différence (à l'exception des horodatages ou de l'ordre des destructors) signifie que
							l'exercice est incorrect.</p>

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
					</section>
				</div>
				<div class="col-sm-12 scale-div pb-4">
					<div class="dancer from-down" id="ratings-29673">
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
</html>