<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","car");
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM t_car ";
$result=mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>