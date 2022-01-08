<?php 
require_once __DIR__ . "/db.php";
$filteredDisk = [];
$genre = $_GET["genre"];
if(!empty($_GET)){
  $filteredDisk=[];
  foreach($disks as $disk){
    if(array_search($genre,$disk)){
        array_push($filteredDisk,$disk);
    }
  }
}else{
  $filteredDisk = $disks;
}  

header('Content-Type: application/json');
echo json_encode($filteredDisk);




?>

