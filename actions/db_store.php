<?php
// Database configuration
$servername = "aipulsb648.mysql.db"; // Server name
$username = "aipulsb648"; // Database username
$password = "Ga3B0ujMS"; // Database password
$dbname = "aipulsb648"; // Database name

// Creation of connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Verification of connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response = [
	"status" => "failure",
	"message" => "Error: Unknown",
	"method" => $_SERVER["REQUEST_METHOD"],
];

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize input data
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);
    $first_name = $conn->real_escape_string($data['first_name']);
    $last_name = $conn->real_escape_string($data['last_name']);
    $email = $conn->real_escape_string($data['email']);
    $company_name = $conn->real_escape_string($data['company_name']);
    $phone_number = $conn->real_escape_string($data['phone_number']);

	$response["data"] = [
		"first_name" => $first_name,
		"last_name" => $last_name,
		"email" => $email,
		"company_name" => $company_name,
		"phone_number" => $phone_number,
	];
    // SQL query to insert data into the database
    $sql = "INSERT INTO users (first_name, last_name, email, company_name, phone_number) VALUES ('$first_name', '$last_name', '$email', '$company_name', '$phone_number')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
		$response["status"] = "success";
		$response["message"] = "Data were stored successfully in database";
    } else {
		$response["message"] = "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
	$response["message"] = "Error: Invalid method";
}

// Return feedback to caller
$jsonData = json_encode($response);
header('Content-Type: application/json');
echo $jsonData;

// Close the connection
$conn->close();
?>
