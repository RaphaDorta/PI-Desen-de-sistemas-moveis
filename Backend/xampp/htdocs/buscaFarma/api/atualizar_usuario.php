<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Capturando dados JSON da requisição
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifique se os dados estão presentes no JSON
    if (isset($data['id_usuario'], $data['nome_usuario'], $data['sobrenome_usuario'], 
              $data['email_usuario'], $data['cpf_usuario'], $data['data_nascimento'], 
              $data['nickname_usuario'], $data['senha'])) {

        $id_usuario = $data['id_usuario'];
        $nome_usuario = $data['nome_usuario'];
        $sobrenome_usuario = $data['sobrenome_usuario'];
        $email_usuario = $data['email_usuario'];
        $cpf_usuario = $data['cpf_usuario'];
        $data_nascimento = $data['data_nascimento'];
        $nickname_usuario = $data['nickname_usuario'];
        $senha = $data['senha'];

        // Criptografa a senha
        $senha_hash = password_hash($senha, PASSWORD_BCRYPT);

        // Atualiza o banco de dados
        $sql = "UPDATE usuarios 
                SET nome_usuario = :nome_usuario, sobrenome_usuario = :sobrenome_usuario, 
                    email_usuario = :email_usuario, cpf_usuario = :cpf_usuario, 
                    data_nascimento = :data_nascimento, nickname_usuario = :nickname_usuario, 
                    password_usuario = :senha_hash
                WHERE id_usuario = :id_usuario";

        $stmt = $db->prepare($sql);
        $stmt->bindParam(':nome_usuario', $nome_usuario);
        $stmt->bindParam(':sobrenome_usuario', $sobrenome_usuario);
        $stmt->bindParam(':email_usuario', $email_usuario);
        $stmt->bindParam(':cpf_usuario', $cpf_usuario);
        $stmt->bindParam(':data_nascimento', $data_nascimento);
        $stmt->bindParam(':nickname_usuario', $nickname_usuario);
        $stmt->bindParam(':senha_hash', $senha_hash);
        $stmt->bindParam(':id_usuario', $id_usuario);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Usuário atualizado com sucesso!']);
        } else {
            echo json_encode(['message' => 'Erro ao atualizar o usuário.']);
        }
    } else {
        echo json_encode(['message' => 'Dados incompletos.']);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}

