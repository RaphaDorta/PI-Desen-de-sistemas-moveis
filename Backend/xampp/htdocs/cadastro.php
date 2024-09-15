<?php
// Conectar ao banco de dados
$conn = new mysqli('localhost', 'root', '', 'seu_banco_de_dados');

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados da requisição
$data = json_decode(file_get_contents("php://input"), true);

$nome = $data['nome'];
$sobrenome = $data['sobrenome'];
$email = $data['email'];
$cpf = $data['cpf'];
$dataNascimento = $data['dataNascimento'];

// Verificar se o CPF já está cadastrado
$sql = "SELECT * FROM usuarios WHERE cpf='$cpf'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'CPF já cadastrado']);
} else {
    // Inserir novos dados
    $sql = "INSERT INTO usuarios (nome, sobrenome, email, cpf, dataNascimento) VALUES ('$nome', '$sobrenome', '$email', '$cpf', '$dataNascimento')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar: ' . $conn->error]);
    }
}

$conn->close();
?>
