<?php
// Configuração do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "seu_banco_de_dados";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados da requisição
$data = json_decode(file_get_contents('php://input'), true);
$senha = $data['senha'];

// Validar e preparar a senha
if (strlen($senha) >= 5) {
  $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

  // Inserir senha no banco de dados
  $sql = "UPDATE usuarios SET senha='$senhaHash' WHERE id=1"; // Ajuste conforme necessário
  if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "sucesso"]);
  } else {
    echo json_encode(["status" => "erro", "message" => $conn->error]);
  }
} else {
  echo json_encode(["status" => "erro", "message" => "Senha deve ter no mínimo 5 caracteres"]);
}

// Fechar conexão
$conn->close();
?>
