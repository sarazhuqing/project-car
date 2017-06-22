<?php
header('Content-Type:application/json;charset=utf-8');
$conn=mysqli_connect("127.0.0.1","root","","car");
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$pageNo=$_REQUEST['pageNo'];

$offset=($pageNo-1)*8;
$sql="SELECT * FROM t_car LIMIT $offset,8";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
$output=[];
$output["data"]=$row;
$output['pageNo']=$pageNo;
$str=json_encode($output);
echo $str;



?>