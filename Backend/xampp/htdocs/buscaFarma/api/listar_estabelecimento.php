<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM estabelecimento";
$stmt = $db->prepare($query);
$stmt->execute();

$estabelecimentos = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($estabelecimentos as $estabelecimento) {
    echo "ID: " . $estabelecimento['id'] . "<br>";
    echo "Nome da Farmácia: " . $estabelecimento['nome_farmacia'] . "<br>";
    echo "Endereço: " . $estabelecimento['endereco_farmacia'] . "<br>";
    echo "Cidade: " . $estabelecimento['cidade'] . "<br>";
    echo "Estado: " . $estabelecimento['estado'] . "<br>";
    echo "Telefone: " . $estabelecimento['telefone'] . "<br>";
    echo "Email: " . $estabelecimento['email'] . "<br>";
    echo "Horário de Funcionamento: " . $estabelecimento['horario_funcionamento'] . "<br><br>";
}
?>
