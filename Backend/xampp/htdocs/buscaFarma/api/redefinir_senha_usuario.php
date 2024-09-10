<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capturando dados JSON da requisição
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['token'], $data['nova_senha'])) {
        $token = $data['token'];
        $nova_senha = $data['nova_senha'];

        // Verificar se o token é válido e não expirou
        $sql = "SELECT * FROM usuarios WHERE reset_token = :reset_token AND reset_token_expire > NOW()";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':reset_token', $token);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            // Token válido, redefinir a senha
            $senha_hash = password_hash($nova_senha, PASSWORD_BCRYPT);
            $sql = "UPDATE usuarios SET password_usuario = :nova_senha, reset_token = NULL, reset_token_expire = NULL WHERE reset_token = :reset_token";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':nova_senha', $senha_hash);
            $stmt->bindParam(':reset_token', $token);

            if ($stmt->execute()) {
                echo json_encode(['message' => 'Senha redefinida com sucesso!']);
            } else {
                echo json_encode(['message' => 'Erro ao redefinir a senha.']);
            }
        } else {
            echo json_encode(['message' => 'Token inválido ou expirado.']);
        }
    } else {
        echo json_encode(['message' => 'Dados incompletos.']);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}
?>
