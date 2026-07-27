<?php
// TEMPORARY DIAGNOSTIC — DELETE AFTER USE.
// Open in browser:  https://yourdomain.com/mailtest.php?key=letmein
// Shows the full SMTP conversation with Gmail on the page.

header("Content-Type: text/plain; charset=utf-8");

// Simple guard so random visitors can't spam-send.
if (($_GET["key"] ?? "") !== "letmein") {
    http_response_code(403);
    echo "Forbidden. Append ?key=letmein to the URL.";
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/PHPMailer/Exception.php";
require __DIR__ . "/PHPMailer/PHPMailer.php";
require __DIR__ . "/PHPMailer/SMTP.php";

// --- Load .env (same path logic as contact.php) ---
$env = [];
$envPath = __DIR__ . "/../../.env";
echo "ENV path checked: $envPath\n";
echo "ENV readable:     " . (is_readable($envPath) ? "YES" : "NO") . "\n";
if (is_readable($envPath)) {
    $parsed = parse_ini_file($envPath);
    if ($parsed !== false) {
        $env = $parsed;
    }
}

$smtpHost = $env["SMTP_HOST"]     ?? "smtp.gmail.com";
$smtpPort = (int) ($env["SMTP_PORT"] ?? 587);
$smtpUser = $env["SMTP_USERNAME"] ?? "";
$smtpPass = $env["SMTP_PASSWORD"] ?? "";
$fromMail = $env["SMTP_FROM_EMAIL"] ?? $smtpUser;
$fromName = $env["SMTP_FROM_NAME"]  ?? "SignEdge";
$toMail   = $env["SMTP_TO_EMAIL"]   ?? "info@signedgeindia.com";

// Optional: override recipient via ?to=  to test a different inbox.
if (!empty($_GET["to"]) && filter_var($_GET["to"], FILTER_VALIDATE_EMAIL)) {
    $toMail = $_GET["to"];
}

echo "----- CONFIG -----\n";
echo "Host:     $smtpHost\n";
echo "Port:     $smtpPort\n";
echo "Username: $smtpUser\n";
echo "Password: " . (empty($smtpPass) ? "(EMPTY!)" : "set (" . strlen($smtpPass) . " chars)") . "\n";
echo "From:     $fromMail ($fromName)\n";
echo "To:       $toMail\n";
echo "------------------\n\n";

if (empty($smtpUser) || empty($smtpPass)) {
    echo "STOP: SMTP username or password is empty. .env not loaded correctly.\n";
    exit;
}

$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug   = SMTP::DEBUG_SERVER; // full server conversation
    $mail->Debugoutput = function ($str, $level) {
        echo $str . "\n";
    };
    $mail->isSMTP();
    $mail->Host     = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->Port     = $smtpPort;
    $mail->CharSet  = "UTF-8";
    if ($smtpPort === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom($fromMail, $fromName);
    $mail->addAddress($toMail, "Mail Test");

    $mail->isHTML(false);
    $mail->Subject = "SignEdge mailtest " . date("Y-m-d H:i:s");
    $mail->Body    = "Test email from mailtest.php at " . date("c");

    $mail->send();

    echo "\n===== RESULT: SUCCESS =====\n";
    echo "Gmail accepted the message.\n";
    echo "MessageID: " . $mail->getLastMessageID() . "\n";
    echo "Delivered-to attempt: $toMail\n";
} catch (Exception $ex) {
    echo "\n===== RESULT: FAILED =====\n";
    echo "Error: " . $mail->ErrorInfo . "\n";
}
