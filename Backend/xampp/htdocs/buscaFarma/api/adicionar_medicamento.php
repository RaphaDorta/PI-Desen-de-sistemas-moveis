<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lê o corpo da requisição e decodifica o JSON
    $data = json_decode(file_get_contents("php://input"));

    // Verifica se todos os dados necessários foram fornecidos
    if (isset($data->nome) && isset($data->descricao) && isset($data->quantidade) && isset($data->preco) && isset($data->data_validade)) {
        $query = "INSERT INTO medicamentos (nome, descricao, quantidade, preco, data_validade) VALUES (:nome, :descricao, :quantidade, :preco, :data_validade)";
        $stmt = $db->prepare($query);

        // Vincula os parâmetros
        $stmt->bindParam(':nome', $data->nome);
        $stmt->bindParam(':descricao', $data->descricao);
        $stmt->bindParam(':quantidade', $data->quantidade);
        $stmt->bindParam(':preco', $data->preco);
        $stmt->bindParam(':data_validade', $data->data_validade);

        // Executa a consulta e retorna a resposta
        if ($stmt->execute()) {
            echo json_encode(["message" => "Medicamento adicionado com sucesso."]);
        } else {
            echo json_encode(["message" => "Erro ao adicionar o medicamento."]);
        }
    } else {
        echo json_encode(["message" => "Dados incompletos. Todos os campos são necessários."]);
    }
}
?>
