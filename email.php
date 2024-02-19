<?php
if(isset($_POST['submit']))
{
  $to = 'lieliebokkie@gmail.com';

  // get the form data
  $from = $_POST['email'];
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $message = $_POST['message'];

  // set the email recipient, subject, and body
  $subject = 'Website Inquiry';
  $body = 
  "<h1>New Website Inquiry Info:</h1>
  <p>Name: $firstName $lastName</p>
  <p>Email: $email</p>
  <p>Message: $message</p>";

  // set the email headers
  $headers = 'MIME-Version: 1.0';
  $headers = 'Content-type: text/html; charset=iso-8859-1';
  $headers = "From:" . $from;

  $result = mail($to, $subject, $body, $headers);

  // send the email
  if ($result) {
    echo '<script type="text/javascript">alert("Your Email was sent Successfully!");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  }else{
    echo '<script type="text/javascript">alert("Sorry! Email was not sent, Try again Later.");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  }
}
?>
