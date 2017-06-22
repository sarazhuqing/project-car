<?php
//输出总页数
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","car");
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT count(1) FROM t_car";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
echo ceil($row[0]/8);

?>