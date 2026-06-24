<?php
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// Load API key from .env one directory above the web root
$apiKey = null;
$envPath = __DIR__ . "/../.env";
if (is_readable($envPath)) {
    $env = parse_ini_file($envPath);
    if ($env !== false && !empty($env["BREVO_API_KEY"])) {
        $apiKey = $env["BREVO_API_KEY"];
    }
}

if (empty($apiKey)) {
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
$subject = trim($input["subject"] ?? "");
$phone   = trim($input["phone"] ?? "");
$message = trim($input["message"] ?? "");

// Validate
if ($name === "" || $subject === "" || $phone === "" || $message === "") {
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
        <div class='info'><strong>Phone:</strong> " . $e($phone) . "</div>
        <div class='info'><strong>Subject:</strong> " . $e($subject) . "</div>
        <div class='info'><strong>Message:</strong></div>
        <p>" . nl2br($e($message)) . "</p>
        <div class='footer'>
            <p>This is an automated email. Please do not reply.</p>
        </div>
    </div>
</body>
</html>";

$payload = [
    "sender"      => ["name" => "Signedge", "email" => "admin@signedgeindia.com"],
    "to"          => [["email" => "info@signedgeindia.com", "name" => "Signedge"]],
    "replyTo"     => ["email" => $email, "name" => $name],
    "subject"     => "Enquiry Received \xe2\x80\x93 SignEdge Website",
    "htmlContent" => $htmlContent,
];

// Send via Brevo
$ch = curl_init("https://api.brevo.com/v3/smtp/email");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => [
        "Content-Type: application/json",
        "Accept: application/json",
        "api-key: " . $apiKey,
    ],
]);

$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($curlErr || $status < 200 || $status >= 300) {
    http_response_code(502);
    echo json_encode(["success" => false, "error" => "Failed to send message"]);
    exit;
}

http_response_code(200);
echo json_encode(["success" => true]);
