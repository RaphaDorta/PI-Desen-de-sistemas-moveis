<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicamentos_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die(json_encode(["error" => "Falha na conexão com o banco de dados"]));
}

// Receber dados do POST
$data = json_decode(file_get_contents("php://input"), true);
$action = $data['action'];
$name = $data['name'];
$quantity = (int)$data['quantity'];

if ($action === 'add') {
    $sql = "INSERT INTO medicamentos (nome, quantidade) VALUES (?, ?) ON DUPLICATE KEY UPDATE quantidade = quantidade + VALUES(quantidade)";
} elseif ($action === 'remove') {
    $sql = "UPDATE medicamentos SET quantidade = quantidade - ? WHERE nome = ? AND quantidade >= ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isi", $quantity, $name, $quantity);
    $stmt->execute();
    if ($stmt->affected_rows === 0) {
        echo json_encode(["error" => "Erro ao remover o medicamento ou quantidade insuficiente"]);
        $stmt->close();
        $conn->close();
        exit();
    }
    $stmt->close();
} else {
    echo json_encode(["error" => "Ação inválida"]);
    $conn->close();
    exit();
}

$stmt = $conn->prepare($sql);
if ($action === 'add') {
    $stmt->bind_param("si", $name, $quantity);
} else {
    $stmt->bind_param("si", $quantity, $name);
}
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["success" => "Operação realizada com sucesso"]);
} else {
    echo json_encode(["error" => "Erro ao realizar a operação"]);
}

$stmt->close();
$conn->close();
?>
