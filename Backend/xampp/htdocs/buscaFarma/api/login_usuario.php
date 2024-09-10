<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Login
    if (isset($data['email_usuario'], $data['senha'])) {
        $email_usuario = $data['email_usuario'];
        $senha = $data['senha'];

        // Verifica se o usuário existe
        $sql = "SELECT id_usuario, password_usuario FROM usuarios WHERE email_usuario = :email_usuario";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':email_usuario', $email_usuario);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verifica a senha
            if (password_verify($senha, $usuario['password_usuario'])) {
                echo json_encode(['message' => 'Login bem-sucedido!' ]);
            } else {
                echo json_encode(['message' => 'Senha incorreta.']);
            }
        } else {
            echo json_encode(['message' => 'Usuário não encontrado.']);
        }
    } else {
        echo json_encode(['message' => 'Dados de login incompletos.']);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}
