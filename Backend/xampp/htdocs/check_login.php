<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Usuário padrão do MySQL no XAMPP
$password = ""; // Senha padrão do MySQL no XAMPP (vazia por padrão)
$dbname = "sua_base_de_dados"; // Substitua pelo nome da sua base de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recebe dados do frontend
$email = $_POST['email'] ?? '';
$cpf = $_POST['cpf'] ?? '';

if ($email) {
    $sql = "SELECT * FROM users WHERE email = ?";
} elseif ($cpf) {
    $sql = "SELECT * FROM users WHERE cpf = ?";
} else {
    echo json_encode(['error' => 'E-mail ou CPF não fornecido.']);
    exit();
}

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email ?: $cpf);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['exists' => true]);
} else {
    echo json_encode(['exists' => false]);
}

$stmt->close();
$conn->close();
?>
