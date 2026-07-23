<?php
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/PHPMailer/Exception.php";
require __DIR__ . "/PHPMailer/PHPMailer.php";
require __DIR__ . "/PHPMailer/SMTP.php";

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// Load config from .env one directory above the web root
$env = [];
$envPath = __DIR__ . "/../../.env";
if (is_readable($envPath)) {
    $parsed = parse_ini_file($envPath);
    if ($parsed !== false) {
        $env = $parsed;
    }
}

$smtpHost = $env["SMTP_HOST"]     ?? "smtp.gmail.com";
$smtpPort = (int) ($env["SMTP_PORT"] ?? 587);
$smtpUser = $env["SMTP_USERNAME"] ?? "";
$smtpPass = $env["SMTP_PASSWORD"] ?? ""; // Gmail App Password
$fromMail = $env["SMTP_FROM_EMAIL"] ?? $smtpUser;
$fromName = $env["SMTP_FROM_NAME"]  ?? "SignEdge";
$toMail   = $env["SMTP_TO_EMAIL"]   ?? "info@signedgeindia.com";

if (empty($smtpUser) || empty($smtpPass)) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Server is not configured"]);
    exit;
}

// Read JSON body
$input = json_decode(file_get_contents("php://input"), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid request"]);
    exit;
}

$name    = trim($input["name"] ?? "");
$email   = trim($input["email"] ?? "");
$message = trim($input["message"] ?? "");

// Validate — only the fields the form actually sends
if ($name === "" || $message === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "All fields are required"]);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid email address"]);
    exit;
}

// Escape user input for HTML email
$e = fn($v) => htmlspecialchars($v, ENT_QUOTES, "UTF-8");

$htmlContent = "<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h2 { color: #333; }
        p { font-size: 16px; color: #555; }
        .info { margin: 10px 0; }
        .footer { margin-top: 20px; font-size: 14px; color: #888; text-align: center; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Enquiry Received</h2>
        <div class='info'><strong>Name:</strong> " . $e($name) . "</div>
        <div class='info'><strong>Email:</strong> " . $e($email) . "</div>
        <div class='info'><strong>Message:</strong></div>
        <p>" . nl2br($e($message)) . "</p>
        <div class='footer'>
            <p>This is an automated email. Please do not reply.</p>
        </div>
    </div>
</body>
</html>";

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->Port       = $smtpPort;
    $mail->CharSet    = "UTF-8";
    if ($smtpPort === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom($fromMail, $fromName);
    $mail->addAddress($toMail, "SignEdge");
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "Enquiry Received \xe2\x80\x93 SignEdge Website";
    $mail->Body    = $htmlContent;
    $mail->AltBody = "Name: $name\nEmail: $email\n\n$message";

    $mail->send();
} catch (Exception $ex) {
    error_log("Contact form mail error: " . $mail->ErrorInfo);
    http_response_code(502);
    echo json_encode(["success" => false, "error" => "Failed to send message"]);
    exit;
}

http_response_code(200);
echo json_encode(["success" => true]);
