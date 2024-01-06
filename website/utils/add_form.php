<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Adjust this path if needed

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login42 = $_POST['login42'] ?? 'Not provided';
    $customMessage = $_POST['customMessage'] ?? 'Not provided';

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.infomaniak.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_SERVER['REDIRECT_FORM_EMAIL'];
        $mail->Password = $_SERVER['REDIRECT_EMAIL_PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($_SERVER['REDIRECT_FORM_EMAIL'], 'Mailer');
        $mail->addAddress($_SERVER['REDIRECT_PERSONAL_EMAIL'], '42 Evals');

        // Attachments
        if (isset($_FILES['fileUpload']) && $_FILES['fileUpload']['error'] == 0) {
            $mail->addAttachment($_FILES['fileUpload']['tmp_name'], $_FILES['fileUpload']['name']);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Submission from 42 Evals';
        $mail->Body    = "42 Login: " . htmlspecialchars($login42) . "<br>Custom Message: " . htmlspecialchars($customMessage);

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
