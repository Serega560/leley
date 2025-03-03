<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

try {
    // Настройка кодировки и языка
    $mail->Charset = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    // Настройка SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // SMTP-сервер Gmail
    $mail->SMTPAuth = true;
    $mail->Username = 'asaulsergey@gmail.com'; // Ваша почта Gmail
    $mail->Password = 'Powerlifting732'; // Пароль от вашей почты
    $mail->SMTPSecure = 'tls'; // Используем TLS для безопасного подключения
    $mail->Port = 587; // Порт для TLS

    // От кого письмо
    $mail->setFrom('info@leley.ru', 'Евген');

    // Кому отправить
    $mail->addAddress('info@leley.ru');

    // Добавить Reply-To (почту пользователя из формы)
    if (!empty($_POST['email'])) {
        $mail->addReplyTo($_POST['email'], !empty($_POST['name']) ? $_POST['name'] : '');
    }

    // Тело письма
    $body = '<h1>Встречайте письмо</h1>';

    if (!empty($_POST['name'])) {
        $body .= '<p><strong>Имя:</strong> ' . htmlspecialchars($_POST['name']) . '</p>';
    }
    if (!empty($_POST['email'])) {
        $body .= '<p><strong>E-mail:</strong> ' . htmlspecialchars($_POST['email']) . '</p>';
    }
    if (!empty($_POST['age'])) {
        $body .= '<p><strong>Возраст:</strong> ' . htmlspecialchars($_POST['age']) . '</p>';
    }
    if (!empty($_POST['comment'])) {
        $body .= '<p><strong>Сообщение:</strong> ' . htmlspecialchars($_POST['comment']) . '</p>';
    }

    // Прикрепить файл
    if (!empty($_FILES['image']['tmp_name'])) {
        $filePath = __DIR__ . '/files/' . $_FILES['image']['name'];
        if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
            $mail->addAttachment($filePath);
            $body .= '<p><strong>Фото в приложении</strong></p>';
        } else {
            throw new Exception('Не удалось загрузить файл.');
        }
    }

    $mail->Body = $body;

    // Отправить письмо
    $mail->send();
    $message = 'Данные отправлены';
} catch (Exception $e) {
    $message = 'Ошибка: ' . $mail->ErrorInfo;
}

$response = ['message' => $message];

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($response);
