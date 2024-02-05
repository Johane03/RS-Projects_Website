<?php
// get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// set the email recipient, subject, and body
$to = "lieliebokkie@gmail.com";
$subject = "Website Inquiry";
$body = "<h1>New Website Inquiry Info:</h1>
<p>Name: $name</p>
<p>Email: $email</p>
<p>Phone: $phone</p>
<p>Message: $message</p>";

// set the email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";

// send the email
if (mail($to, $subject, $body, $headers)) {
  echo "Email sent successfully";
} else {
  echo "Email sending failed";
}
?>
