<?php
session_start();

$_SESSION['user'] = (isset($_GET['user']) === true) ? (int)$_GET['user'] : 0;

require 'core/classes/Core.php';
require 'core/classes/Chat.php';

$chat = new Chat();
$chat->throwMessage(1,'This is a test message');
// echo '<pre>',print_r($chat->fetchMessages(),true),'</pre>';

// require 'core/init.php';
// echo $_SESSION['user']; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Chat</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="chat">
        <div class="messages">

            <div class="message">
                <a href="#">alex</a>says:
                <p>The message will display here</p>
            </div>

        </div>
        <textarea class="entry" placeholder="Type here and hit Return. Use Shift + Return for a new line"></textarea>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="js/chat.js"></script>
</body>
</html>