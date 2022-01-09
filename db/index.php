<?php 
require_once __DIR__ . "/db.php";
$filteredDisk = [];
$genre = $_GET["genre"];
$year = $_GET["year"];


if(!empty($_GET)){
  $filteredDisk=[];
  if(!empty($genre))
  foreach($disks as $disk){
    if(array_search($genre,$disk)){
        array_push($filteredDisk,$disk);
    }
  }
  if(!empty($year))
  foreach($disks as $disk){
    

    if(($disk["year"]>(int)$year)&&($disk["year"]<(int)$year+ 10) ){
        array_push($filteredDisk,$disk);
    }
  }
}else{
  $filteredDisk = $disks;
}  

header('Content-Type: application/json');
echo json_encode($filteredDisk);




?>

