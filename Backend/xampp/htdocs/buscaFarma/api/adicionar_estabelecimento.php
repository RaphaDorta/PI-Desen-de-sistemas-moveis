<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lê o corpo da requisição e decodifica o JSON
    $data = json_decode(file_get_contents("php://input"));

    // Verifica se todos os dados necessários foram fornecidos
    if (isset($data->nome_farmacia) && isset($data->endereco_farmacia) && isset($data->cidade) && isset($data->estado) && isset($data->telefone) && isset($data->email) && isset($data->horario_funcionamento)) {
        $query = "INSERT INTO estabelecimento (nome_farmacia, endereco_farmacia, cidade, estado, telefone, email, horario_funcionamento) VALUES (:nome_farmacia, :endereco_farmacia, :cidade, :estado, :telefone, :email, :horario_funcionamento)";
        $stmt = $db->prepare($query);

        // Vincula os parâmetros
        $stmt->bindParam(':nome_farmacia', $data->nome_farmacia);
        $stmt->bindParam(':endereco_farmacia', $data->endereco_farmacia);
        $stmt->bindParam(':cidade', $data->cidade);
        $stmt->bindParam(':estado', $data->estado);
        $stmt->bindParam(':telefone', $data->telefone);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindParam(':horario_funcionamento', $data->horario_funcionamento);

        // Executa a consulta e retorna a resposta
        if ($stmt->execute()) {
            echo json_encode(["message" => "Estabelecimento adicionado com sucesso."]);
        } else {
            echo json_encode(["message" => "Erro ao adicionar o estabelecimento."]);
        }
    } else {
        echo json_encode(["message" => "Dados incompletos. Todos os campos são necessários."]);
    }
}
?>
