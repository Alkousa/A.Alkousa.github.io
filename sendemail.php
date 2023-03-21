<?php
if (isset($_POST['submit'])) {
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ahmko38@gmail.com";
    //extra info 
    $header = "From: ".$email;
    //actual message
    $body = "Name: .$name\nEmail: .$email\nMessage: .$message";

    mail($to, $header, $body); 
    header("Location: index.html?mailsent")

}
?>
