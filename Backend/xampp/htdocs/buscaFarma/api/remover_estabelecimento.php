<?php
include_once 'Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $database = new Database();
    $db = $database->getConnection();

    // Lê o corpo da requisição e decodifica o JSON
    $data = json_decode(file_get_contents("php://input"));

    // Verifica se o ID foi fornecido
    if (isset($data->id)) {
        $query = "DELETE FROM estabelecimento WHERE id = :id";
        $stmt = $db->prepare($query);

        // Vincula o parâmetro
        $stmt->bindParam(':id', $data->id);

        // Executa a consulta e retorna a resposta
        if ($stmt->execute()) {
            echo json_encode(["message" => "Estabelecimento removido com sucesso!"]);
        } else {
            echo json_encode(["message" => "Erro ao remover estabelecimento."]);
        }
    } else {
        echo json_encode(["message" => "ID não fornecido."]);
    }
} else {
    echo json_encode(["message" => "Método não suportado."]);
}
?>
