<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Lê o corpo da requisição e decodifica o JSON
    $data = json_decode(file_get_contents("php://input"));

    // Verifica se o ID foi fornecido
    if (isset($data->id)) {
        $query = "DELETE FROM medicamentos WHERE id = :id";
        $stmt = $db->prepare($query);

        // Vincula o parâmetro
        $stmt->bindParam(':id', $data->id);

        // Executa a consulta e retorna a resposta
        if($stmt->execute()) {
            echo json_encode(["message" => "Medicamento deletado com sucesso."]);
        } else {
            echo json_encode(["message" => "Erro ao deletar o medicamento."]);
        }
    } else {
        echo json_encode(["message" => "ID não fornecido."]);
    }
} else {
    echo json_encode(["message" => "Método não suportado."]);
}
?>
