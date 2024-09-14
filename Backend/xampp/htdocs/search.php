<?php
header('Content-Type: application/json');

// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "username", "password", "database");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Obter o nome do remédio
$name = $_GET['name'];
$response = ['found' => false, 'data' => null];

// Consultar o banco de dados
$query = $mysqli->prepare("SELECT * FROM medicamentos WHERE nome = ?");
$query->bind_param("s", $name);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    $response['found'] = true;
    $response['data'] = $result->fetch_assoc();
}

$query->close();
$mysqli->close();

echo json_encode($response);
?>
