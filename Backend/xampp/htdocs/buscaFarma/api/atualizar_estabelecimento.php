<?php
include_once 'Database.php';

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $database = new Database();
    $db = $database->getConnection();

    // Obtém os dados enviados
    $input = json_decode(file_get_contents('php://input'), true);

    // Verifica se todas as chaves estão definidas
    if (isset($input['id']) && isset($input['nome_farmacia']) && isset($input['endereco_farmacia']) && isset($input['cidade']) && isset($input['estado']) && isset($input['telefone']) && isset($input['email']) && isset($input['horario_funcionamento'])) {
        $id = $input['id'];
        $nome_farmacia = $input['nome_farmacia'];
        $endereco_farmacia = $input['endereco_farmacia'];
        $cidade = $input['cidade'];
        $estado = $input['estado'];
        $telefone = $input['telefone'];
        $email = $input['email'];
        $horario_funcionamento = $input['horario_funcionamento'];

        $query = "UPDATE estabelecimento SET nome_farmacia = :nome_farmacia, endereco_farmacia = :endereco_farmacia, cidade = :cidade, estado = :estado, telefone = :telefone, email = :email, horario_funcionamento = :horario_funcionamento WHERE id = :id";

        $stmt = $db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':nome_farmacia', $nome_farmacia);
        $stmt->bindParam(':endereco_farmacia', $endereco_farmacia);
        $stmt->bindParam(':cidade', $cidade);
        $stmt->bindParam(':estado', $estado);
        $stmt->bindParam(':telefone', $telefone);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':horario_funcionamento', $horario_funcionamento);

        if ($stmt->execute()) {
            echo "Estabelecimento atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar estabelecimento.";
        }
    } else {
        echo "Dados incompletos.";
    }
} else {
    echo "Método não permitido.";
}
?>
