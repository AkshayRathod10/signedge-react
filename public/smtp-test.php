<?php
// TEMPORARY DEBUG SCRIPT — DELETE AFTER USE.
// Visit: https://your-site/smtp-test.php?key=letmein
header("Content-Type: text/plain; charset=utf-8");

if (($_GET["key"] ?? "") !== "letmein") {
    http_response_code(403);
    echo "forbidden";
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/PHPMailer/Exception.php";
require __DIR__ . "/PHPMailer/PHPMailer.php";
require __DIR__ . "/PHPMailer/SMTP.php";

// --- 1. Can we read .env? ---
$envPath = __DIR__ . "/../.env";
echo ".env path:      $envPath\n";
echo ".env readable:  " . (is_readable($envPath) ? "YES" : "NO") . "\n";

$env = is_readable($envPath) ? parse_ini_file($envPath) : [];

$host = $env["SMTP_HOST"]     ?? "smtp.gmail.com";
$port = (int) ($env["SMTP_PORT"] ?? 587);
$user = $env["SMTP_USERNAME"] ?? "";
$pass = $env["SMTP_PASSWORD"] ?? "";
$from = $env["SMTP_FROM_EMAIL"] ?? $user;
$to   = $env["SMTP_TO_EMAIL"]   ?? "info@signedgeindia.com";

echo "SMTP_HOST:      $host\n";
echo "SMTP_PORT:      $port\n";
echo "SMTP_USERNAME:  " . ($user !== "" ? $user : "(empty!)") . "\n";
echo "SMTP_PASSWORD:  " . ($pass !== "" ? "set (" . strlen($pass) . " chars)" : "(empty!)") . "\n";
echo "SMTP_FROM:      $from\n";
echo "SMTP_TO:        $to\n";
echo str_repeat("-", 50) . "\n";

// --- 2. Can we even open a TCP socket to the SMTP host? ---
echo "Testing raw TCP connect to $host:$port ...\n";
$fp = @fsockopen($host, $port, $errno, $errstr, 10);
if ($fp) {
    echo "TCP connect:    OK\n";
    fclose($fp);
} else {
    echo "TCP connect:    FAILED ($errno: $errstr)\n";
    echo ">> Host is likely BLOCKING outbound SMTP on this port.\n";
}
echo str_repeat("-", 50) . "\n";

// --- 3. Full PHPMailer attempt with verbose debug ---
$mail = new PHPMailer(true);
$mail->SMTPDebug   = SMTP::DEBUG_CONNECTION; // full conversation
$mail->Debugoutput = function ($str, $level) { echo trim($str) . "\n"; };

try {
    $mail->isSMTP();
    $mail->Host     = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $user;
    $mail->Password = $pass;
    $mail->Port     = $port;
    $mail->CharSet  = "UTF-8";
    $mail->SMTPSecure = ($port === 465)
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;

    $mail->setFrom($from, "SignEdge Test");
    $mail->addAddress($to);
    $mail->Subject = "SMTP test " . $port;
    $mail->Body    = "If you got this, SMTP works.";

    $mail->send();
    echo str_repeat("-", 50) . "\nRESULT: SENT OK\n";
} catch (Exception $ex) {
    echo str_repeat("-", 50) . "\n";
    echo "RESULT: FAILED\n";
    echo "ErrorInfo: " . $mail->ErrorInfo . "\n";
}
