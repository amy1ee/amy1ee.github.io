<?php
    $to = "amy.lee2514@gmail.com";
    $subject = getElementById('subject');
    $message = getElementById('message');
    $headers = "From: ", getElementById('email');
    mail($to, $subject, $message, $headers);
?>;