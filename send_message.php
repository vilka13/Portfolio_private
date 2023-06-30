<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "stanislauolshevski@sofreelancer.pl";
    $subject = "New Message from Website";
    $email_message = "Name: $name\n";
    $email_message .= "Company: $company\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";
    $headers = "From: $email";

    if (mail($to, $subject, $email_message, $headers)) {
        // Сообщение успешно отправлено
        echo "success";
    } else {
        // Произошла ошибка при отправке сообщения
        echo "error";
    }
    exit(); // Добавлено для прерывания выполнения скрипта после отправки сообщения
}
?>
