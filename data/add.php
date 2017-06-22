<?php
header("Content-Type:application/json;charset=utf-8");
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$conn=mysqli_connect("127.0.0.1","root","","car");
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="INSERT INTO t_login VALUES('$uname','$upwd')";
$result=mysqli_query($conn,$sql);
echo json_encode($result);


?>