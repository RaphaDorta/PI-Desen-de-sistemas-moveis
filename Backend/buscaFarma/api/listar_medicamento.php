<?php
include_once 'Database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM medicamentos";
$stmt = $db->prepare($query);
$stmt->execute();

$medicamentos = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($medicamentos);
?>
