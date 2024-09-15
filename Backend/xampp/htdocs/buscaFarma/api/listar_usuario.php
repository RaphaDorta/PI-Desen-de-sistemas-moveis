<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capturando dados JSON da requisição
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifique se os dados estão presentes no JSON
    if (isset($data['nome_usuario'], $data['sobrenome_usuario'], $data['email_usuario'], 
              $data['cpf_usuario'], $data['data_nascimento'], $data['nickname_usuario'], 
              $data['senha'])) {

        $nome_usuario = $data['nome_usuario'];
        $sobrenome_usuario = $data['sobrenome_usuario'];
        $email_usuario = $data['email_usuario'];
        $cpf_usuario = $data['cpf_usuario'];
        $data_nascimento = $data['data_nascimento'];
        $nickname_usuario = $data['nickname_usuario'];
        $senha = $data['senha'];

        // Criptografa a senha
        $senha_hash = password_hash($senha, PASSWORD_BCRYPT);

        // Insere no banco de dados
        $sql = "INSERT INTO usuarios (nome_usuario, sobrenome_usuario, email_usuario, cpf_usuario, 
                data_nascimento, nickname_usuario, password_usuario) 
                VALUES (:nome_usuario, :sobrenome_usuario, :email_usuario, :cpf_usuario, :data_nascimento, 
                :nickname_usuario, :senha_hash)";

        $stmt = $db->prepare($sql);
        $stmt->bindParam(':nome_usuario', $nome_usuario);
        $stmt->bindParam(':sobrenome_usuario', $sobrenome_usuario);
        $stmt->bindParam(':email_usuario', $email_usuario);
        $stmt->bindParam(':cpf_usuario', $cpf_usuario);
        $stmt->bindParam(':data_nascimento', $data_nascimento);
        $stmt->bindParam(':nickname_usuario', $nickname_usuario);
        $stmt->bindParam(':senha_hash', $senha_hash);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Usuário cadastrado com sucesso!']);
        } else {
            echo json_encode(['message' => 'Erro ao cadastrar o usuário.']);
        }
    } else {
        echo json_encode(['message' => 'Dados incompletos.']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Verifica se um ID de usuário foi passado como parâmetro na URL
    if (isset($_GET['id'])) {
        $id_usuario = $_GET['id'];

        // Consulta o banco de dados para o usuário com o ID fornecido
        $sql = "SELECT * FROM usuarios WHERE id_usuario = :id_usuario";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id_usuario', $id_usuario);

        if ($stmt->execute()) {
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                echo json_encode($usuario);
            } else {
                echo json_encode(['message' => 'Usuário não encontrado.']);
            }
        } else {
            echo json_encode(['message' => 'Erro ao buscar o usuário.']);
        }
    } else {
        // Se nenhum ID for fornecido, retorna todos os usuários
        $sql = "SELECT * FROM usuarios";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($usuarios);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}


