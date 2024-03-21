<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$login42 = $_POST['login42'] ?? 'Not provided';
	$customMessage = $_POST['customMessage'] ?? 'Not provided';

	$mail = new PHPMailer(true);
	try {
		$mail->isSMTP();
		$mail->Host = 'mail.infomaniak.com';
		$mail->SMTPAuth = true;
		$mail->Username = $_ENV['FORM_EMAIL'];
		$mail->Password = $_ENV['EMAIL_PASSWORD'];
		$mail->SMTPSecure = 'tls';
		$mail->Port = 587;

		$mail->setFrom($_ENV['FORM_EMAIL'], 'Mailer');
		$mail->addAddress($_ENV['PERSONAL_EMAIL'], '42 Evals');
		if (isset($_FILES['fileUpload']) && $_FILES['fileUpload']['error'] == 0)
			$mail->addAttachment($_FILES['fileUpload']['tmp_name'], $_FILES['fileUpload']['name']);
		$mail->isHTML(true);
		$mail->Subject = 'New Submission from 42 Evals';
		$mail->Body    = "42 Login: " . htmlspecialchars($login42) . "<br>Custom Message: " . htmlspecialchars($customMessage);

		$mail->send();
		header('Location: ../submit_update?status=success');
	} catch (Exception $e) {
		header('Location: ../submit_update?status=error');
	}
}
?>
