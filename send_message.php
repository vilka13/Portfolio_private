<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "lukumer1997@gmail.com"; // Замените на вашу электронную почту
    $subject = "New Message from Your Portfolio Website";
    $body = "Name: $name\n\nCompany: $company\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: contacts.html");
        exit(); else {
        echo "Message could not be sent.";
    }
}
?>

