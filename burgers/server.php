<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$name = $_POST['username'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$building = $_POST['building'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$pay = $_POST['payment'];
$disturb = $_POST['dont-disturb']; // 1 or null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

//Server settings
$mail->SMTPDebug = 2;                                 // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lsphp@mail.ru';                 // SMTP username
$mail->Password = 'qwe123qwe123';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

//Recipients
$mail->setFrom('lsphp@mail.ru', 'BurgersMailer');
$mail->addAddress('surov-qostya@yandex.ru', 'Konstantin');     // Add a recipient


//Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Новый заказ';
$mail->Body    = '
<html lang="RU-ru">
<head>
    <meta charset="UTF-8">
    <title>Заявка</title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        <li>Имя:' . $name . '</li>
        <li>Номер телефона:' .  $phone . '</li>
        <li>Улица:' . $street . '</li>
        <li>Дом:' . $house . '</li>
        <li>Корпус:' . $building . '</li>
        <li>Квартира:' . $flat . '</li>
        <li>Этаж:' .  $floor . '</li>
        <li>Комментарий:' . $comment . '</li>
        <li>Способ оплаты:' . $pay . '</li>
        <li>Нужно ли перезванивать клиенту:' . $disturb . '</li>
    </ul>
</body>
</html>';


$mes = [];
if($mail->send()){
    $mes['status'] = 'OK';
    $mes['msg'] = 'Сообщение отправлено';
} else {
    $mes['status'] = 'ERROR';
    $mes['msg'] = 'Произошла ошибка. Вы можете оформить заказ по телефону: +7 (812) 377-13-77';
};

echo json_encode($mes);



?>