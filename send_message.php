<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Адрес электронной почты, на который нужно отправить сообщение
    $to = "123@mail.com";

    // Заголовок письма
    $subject = "New Message from Website";

    // Текст письма
    $email_message = "Name: $name\n";
    $email_message .= "Company: $company\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";

    // Дополнительные заголовки
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $email_message, $headers)) {
        // Сообщение успешно отправлено
        header("Location: contacts.html");
        exit();
    } else {
        // Произошла ошибка при отправке сообщения
        echo "Sorry, something went wrong.";
    }
}
?>