<?php
header("Content-Type: application/json");

// Conectar ao banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nome_do_seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter o nome do medicamento da URL
$medicationName = $_GET['name'];

// Consultar o banco de dados
$sql = "SELECT * FROM medicamentos WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $medicationName);
$stmt->execute();
$result = $stmt->get_result();

$response = array();

if ($result->num_rows > 0) {
    // Medicamento encontrado
    $response['available'] = true;
} else {
    // Medicamento não encontrado
    $response['available'] = false;
}

$stmt->close();
$conn->close();

// Retornar a resposta em formato JSON
echo json_encode($response);
?>
