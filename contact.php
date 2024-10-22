<?php
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $contactMessage = htmlspecialchars($_POST['message']);

    $to = "sspooky530@gmail.com";
    $subject = "New Contact Us Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $contactMessage";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        $message = "Message sent successfully!";
    } else {
        $message = "Failed to send message.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RCN Java PvP Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">RCN Java PvP</div>
            <button id="loginBtn" class="btn">Login</button>
        </header>

        <div class="banner">
            <h1>Welcome to RCN Java PvP Store</h1>
            <p>Get your in-game items and upgrades!</p>
        </div>

        <!-- (other sections remain the same) -->

        <!-- Contact Form -->
        <div class="contact-form">
            <h2>Contact Us</h2>
            <p><?php echo $message; ?></p>
            <form id="contactForm" action="contact.php" method="post">
                <input type="text" id="contactName" name="name" placeholder="Your Name" required>
                <input type="email" id="contactEmail" name="email" placeholder="Your Email" required>
                <textarea id="contactMessage" name="message" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
