<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email details
    $to = "nimish.sehgal33@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message";

    // Send email
    mail($to, $subject, $body);

    // Redirect back to the contact page
    header("Location: contact.php?success=true");
    exit();
} else {
    // If not a POST request, redirect to the contact page
    header("Location: contact.php");
    exit();
}
?>
