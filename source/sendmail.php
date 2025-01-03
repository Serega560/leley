<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PNPMailer(true);
  $mail->Charset = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  //   От кого письмо
  $mail->setFrom('1', "Серега");
  //   Кому отправить
  $mail->addAddress('info@leley.ru');


  //   Тело письма
  $body = <h1>'Встречайте письмо'</h1>;

  if (trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['mail']))) {
      $body.='<p><strong>E-mail:</strong> '.$_POST['mail'].'</p>';
    }
    if (trim(!empty($_POST['age']))) {
      $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
    }
    if (trim(!empty($_POST['message']))) {
      $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }


  //   Прикрепить файл
  if (!empty($_FILES['image']['tmp_name'])) {
    //   путь загрузки файла
    $filePath = _DIR_ . '/files/' . $_FILES['image']['tmp_name'];
    //   грузим файл
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
    $fileAttach = filePath;
    $body.='<p><strong>Фото в приложении</strong></p>';
    $mail->addAttachment($fileAttach);
    }
  }

  $mail->Body = $body;

  //   Отправляем
  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
