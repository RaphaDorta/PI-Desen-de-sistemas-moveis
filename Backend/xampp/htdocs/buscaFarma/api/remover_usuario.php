<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Captura os dados JSON da requisição
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifica se o identificador (id_usuario ou email_usuario) está presente
    if (isset($data['id_usuario']) || isset($data['email_usuario'])) {

        if (isset($data['id_usuario'])) {
            $id_usuario = $data['id_usuario'];

            // Cria a query para deletar com base no id_usuario
            $sql = "DELETE FROM usuarios WHERE id_usuario = :id_usuario";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id_usuario', $id_usuario);

        } elseif (isset($data['email_usuario'])) {
            $email_usuario = $data['email_usuario'];

            // Cria a query para deletar com base no email_usuario
            $sql = "DELETE FROM usuarios WHERE email_usuario = :email_usuario";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':email_usuario', $email_usuario);
        }

        // Executa a query de deleção
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Usuário deletado com sucesso!']);
        } else {
            echo json_encode(['message' => 'Erro ao deletar o usuário.']);
        }
    } else {
        echo json_encode(['message' => 'Identificador de usuário não fornecido.']);
    }
} else {
    echo json_encode(['message' => 'Método não permitido.']);
}
?>

