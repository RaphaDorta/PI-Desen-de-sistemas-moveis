<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['email_usuario'])) {
        $email_usuario = $data['email_usuario'];

        // Verifica se o usuário existe
        $sql = "SELECT * FROM usuarios WHERE email_usuario = :email_usuario";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':email_usuario', $email_usuario);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            $reset_token = bin2hex(random_bytes(50)); // Gerando o token
            $reset_token_expire = date("Y-m-d H:i:s", strtotime('+1 hour')); // O token expira em 1 hora

            // Atualiza o token no banco de dados
            $sql = "UPDATE usuarios SET reset_token = :reset_token, reset_token_expire = :reset_token_expire WHERE email_usuario = :email_usuario";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':reset_token', $reset_token);
            $stmt->bindParam(':reset_token_expire', $reset_token_expire);
            $stmt->bindParam(':email_usuario', $email_usuario);

            if ($stmt->execute()) {
                // Enviar e-mail ao usuário (implementação simples)
                $reset_link = "https://seusite.com/reset_password.php?token=" . $reset_token;
                $subject = "Redefinição de senha";
                $message = "Clique no link para redefinir sua senha: " . $reset_link;
                $headers = "From: no-reply@seusite.com";

                mail($email_usuario, $subject, $message, $headers);

                echo json_encode(['message' => 'Link de redefinição de senha enviado ao e-mail.']);
            } else {
                echo json_encode(['message' => 'Erro ao gerar o link de redefinição de senha.']);
            }
        } else {
            echo json_encode(['message' => 'E-mail não encontrado.']);
        }
    } else {
        echo json_encode(['message' => 'E-mail não fornecido.']);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}
?>
