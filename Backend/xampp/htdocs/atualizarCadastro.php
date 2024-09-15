<?php
// arquivo: atualizarCadastro.php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nome_do_banco"; // Substitua pelo nome correto do banco de dados

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Pegar dados do POST
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$dataNascimento = $_POST['dataNascimento'];

// Query de atualização
$sql = "UPDATE usuarios SET nome='$nome', sobrenome='$sobrenome', data_nascimento='$dataNascimento' WHERE id_usuario=1"; // Substitua a condição pelo filtro correto

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Cadastro atualizado com sucesso."]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao atualizar: " . $conn->error]);
}

$conn->close();
?>
